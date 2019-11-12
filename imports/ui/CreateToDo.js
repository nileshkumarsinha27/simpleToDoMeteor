import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
class CreateToDo extends Component {
  static propTypes = {
    addClick: PropTypes.func
  };

  state = {
    value: '',
    showBtn: false
  };
  handleChange = event => {
    this.setState({
      value: event.target.value,
      showBtn: event.target.value.length ? true : false
    });
  };

  handleClick = () => {
    const { addClick } = this.props;
    const { value } = this.state;
    addClick(value);
    this.setState({
      value: '',
      showBtn: false
    })
  };

  render() {
    const { value, showBtn } = this.state;
    return (
      <Fragment>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
          autoComplete="off"
          className="new-task"
        >
          <label htmlFor="createToDo">ADD TO TO</label>
          <input
            name="createToDo"
            id="createToDo"
            value={value}
            onChange={this.handleChange}
            placeholder="Add To Do"
          />
          <button onClick={this.handleClick} disabled={!showBtn}>Add</button>
        </form>
      </Fragment>
    );
  }
}

CreateToDo.defaultProps = {
  addClick: () => { }
};
export default CreateToDo;

import React, { Component } from 'react';

import Tasks from '../api/tasks.js';


export default class Task extends Component {
  toggleChecked = () => {
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }

  deleteThisTask = () => {
    Tasks.remove(this.props.task._id);
  }

  getTaskClassName = () => this.props.task.checked ? 'checked' : ''

  render() {
    return (
      <li className={this.getTaskClassName()}>
        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked}
        />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
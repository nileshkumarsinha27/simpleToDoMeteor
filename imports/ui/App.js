import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Tasks from '../api/tasks.js';
import Task from './Tasks.js';
import CreateToDo from './CreateToDo';

class App extends Component {


  isDataExists = data => data && data.length > 0

  addToDo = toDo => {
    Tasks.insert({
      text: toDo,
      createdAt: new Date()
    })
  };

  renderTasks = () => <ul className="tasks-list">
    {this.props.tasks.map((elem, index) => <Task task={elem} key={index} />)}
  </ul>

  render() {
    const { tasks } = this.props;
    return (
      <main className="container">
        <header>
          <h1>SIMPLE TODO</h1></header>
        <div className="create-to-do-container">
          <CreateToDo addClick={this.addToDo} />
        </div>
        <div className="taks-container">
          {this.isDataExists(tasks) && this.renderTasks()}
        </div>
      </main>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: 1 } }).fetch(),
  };
})(App);

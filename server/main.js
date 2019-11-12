import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import Tasks from '../imports/api/tasks.js';

function insertLink(title) {
  Tasks.insert({ title, createdAt: new Date(), id: Math.random() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Tasks.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
    );

    insertLink(
      'Follow the Guide',
    );

    insertLink(
      'Read the Docs',
    );

    insertLink(
      'Discussions',
    );
  }
});
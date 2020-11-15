import EmberRouter from '@ember/routing/router';
import config from 'ember-js-learning/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books');
  this.route('speakers');
  this.route('edit-book', {path: "edit-book/:id"});
  this.route('edit-speaker', {path: "edit-speaker/:id"});
  this.route('create-book');
  this.route('create-speaker');
});

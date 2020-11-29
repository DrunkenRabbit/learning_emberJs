import EmberRouter from '@ember/routing/router';
import config from 'ember-js-learning/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('book', {path: "books"});
  this.route('speaker', {path: "speakers"});
  this.route('edit-book', {path: "edit-book/:id"});
  this.route('edit-speaker', {path: "edit-speaker/:id"});
  this.route('create-book');
  this.route('create-speaker');
  this.route('not-found', { path: "*path"});
  this.route('error', { path: "/:error"});
  this.route('meeting', {path: "meetings"});
});

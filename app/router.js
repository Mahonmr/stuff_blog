import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('blog');
  this.route('edit-blog', {path: '/edit-blog/:blog_id'});
  this.route('show-blog', {path: '/show-blog/:blog_id'});
});

export default Router;

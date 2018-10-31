import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('slow', function() {
    this.route('slower', {path: ':slower_id'});
  });
  this.route('slow-loading');
});

export default Router;

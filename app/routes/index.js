import Route from '@ember/routing/route';

export default Route.extend({
  redirect: function () {
    return this.transitionTo('slow');
  }
});

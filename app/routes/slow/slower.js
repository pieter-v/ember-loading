import Route from '@ember/routing/route';

export default Route.extend({
  name: '',

  beforeModel(transition) {
    this.set('name', transition.to.name);
  },

  model() {
    return this.name;
  }
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | slow', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:slow');
    assert.ok(route);
  });
});

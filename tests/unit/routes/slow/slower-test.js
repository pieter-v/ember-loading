import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | slow/slower', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:slow/slower');
    assert.ok(route);
  });
});

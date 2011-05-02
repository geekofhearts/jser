var vows = require('vows'),
    assert = require('assert');

var jser = require('../src/jser.js');

function isDefined(obj) {
  return 'undefined' != typeof(obj);
}

vows.describe('jser').addBatch({
  'the command interface' : {
    server : function() { return jser["server"]; },
    'has property server' : function(server) {
      assert.ok(isDefined(server));
    },
    'jser.server has a property called start' : function(server) {
      assert.ok(isDefined(server['start']));
    },
    'jser.server has a property called stop' : function(server) {
      assert.ok(isDefined(server['stop']));
    }
  }
}).export(module);

var vows = require('vows'),
    assert = require('assert');

var jser = require('../src/jser.js');

vows.describe("jser's main module").addBatch({
  'the interface': {
    topic: jser,
    'has property server': function(topic) {
      assert.isObject(topic);
      assert.isObject(topic['server']);
    },
    'the server interface': {
      topic: function(moduleTopic) { return moduleTopic.server; },
      'jser.server has a property called start': function(server) {
        assert.isFunction(server['start']);
      },
      'jser.server has a property called stop': function(server) {
        assert.isFunction(server['stop']);
      }
    }
  }
}).export(module);

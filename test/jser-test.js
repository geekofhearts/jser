var vows = require('vows'),
    assert = require('assert');

var jser = require('../src/jser.js');
var http = require('http');

vows.describe("jser's main module").addBatch({
  'the interface': {
    topic: jser,
    'has property server': function(topic) {
      assert.isObject(topic);
      assert.isObject(topic['server']);
    },
    'the server interface': {
      topic: function(theJser) { return theJser.server; },
      'jser.server has a property called start': function(server) {
        assert.isFunction(server['start']);
      },
      'jser.server has a property called stop': function(server) {
        assert.isFunction(server['stop']);
      },
      'the started server': {
        topic: function(serverTopic) {
          serverTopic.start();
          return serverTopic;
        },
        'should return response 200': function(startedServer) {
          var options = {
	    host: '127.0.0.1',
	    port: 1337,
	    path: '/'
	  };

          http.get(options, function(res) {
            assert.ok(res.statusCode == 200);
          }).on('error', function(e) {
            assert.ok(false, 'http response not ok with error: ' + e.message);
          });
        }
      }
    }
  }
}).export(module);

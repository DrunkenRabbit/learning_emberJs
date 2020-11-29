'use strict';

define("ember-js-learning/tests/integration/components/book-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | book-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <BookCard />
                */
                {"id":"cWG5tEkC","block":"{\"symbols\":[],\"statements\":[[8,\"book-card\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <BookCard>
                        template block text
                      </BookCard>
                    
                */
                {"id":"CC182A/5","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"book-card\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-js-learning/tests/integration/components/speaker-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | speaker-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  <SpeakerCard />
                */
                {"id":"VDI9PD9E","block":"{\"symbols\":[],\"statements\":[[8,\"speaker-card\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  
                      <SpeakerCard>
                        template block text
                      </SpeakerCard>
                    
                */
                {"id":"4LQX/kqC","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"speaker-card\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("ember-js-learning/tests/test-helper", ["ember-js-learning/app", "ember-js-learning/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-js-learning/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("ember-js-learning/tests/unit/controllers/books-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books');
      assert.ok(controller);
    });
  });
});
define("ember-js-learning/tests/unit/controllers/create-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-book');
      assert.ok(controller);
    });
  });
});
define("ember-js-learning/tests/unit/controllers/create-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | create-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-speaker');
      assert.ok(controller);
    });
  });
});
define("ember-js-learning/tests/unit/controllers/edit-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-book');
      assert.ok(controller);
    });
  });
});
define("ember-js-learning/tests/unit/controllers/edit-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-speaker');
      assert.ok(controller);
    });
  });
});
define("ember-js-learning/tests/unit/controllers/speakers-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers');
      assert.ok(controller);
    });
  });
});
define("ember-js-learning/tests/unit/models/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('book.js', {});
      assert.ok(model);
    });
  });
});
define("ember-js-learning/tests/unit/models/meeting-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('meeting', {});
      assert.ok(model);
    });
  });
});
define("ember-js-learning/tests/unit/models/speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = store.createRecord('speaker.js', {});
      assert.ok(model);
    });
  });
});
define("ember-js-learning/tests/unit/routes/books-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/create-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-book');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/create-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | create-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-speaker');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/edit-book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-book');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/edit-speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-speaker');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/not-found-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | not-found', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:not-found');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/routes/speakers-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers');
      assert.ok(route);
    });
  });
});
define("ember-js-learning/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('application', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-js-learning/tests/unit/serializers/book-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('book');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('book', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-js-learning/tests/unit/serializers/speaker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speaker');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('speaker', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-js-learning/tests/unit/serializers/speakers-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speakers');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = store.createRecord('speaker.js', {});
      var serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-js-learning/tests/unit/services/data-service-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | data-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data-service');
      assert.ok(service);
    });
  });
});
define('ember-js-learning/config/environment', [], function() {
  var prefix = 'ember-js-learning';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-js-learning/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

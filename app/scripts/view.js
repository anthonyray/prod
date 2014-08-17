/*global Prod, Backbone, JST*/
Prod.View = Prod.View || {};

(function () {
    'use strict';
    Prod.View = Backbone.View.extend({

      constructor: function (options) {
        this.configure(options || {});
        Backbone.View.prototype.constructor.apply(this, arguments);
      },

      configure: function (options) {
        if (this.options) {
          options = _.extend({}, _.result(this, 'options'), options);
        }
        this.options = options;
      }

});
})();

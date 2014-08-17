/*global Prod, Backbone*/

Prod.Models = Prod.Models || {};

(function () {
    'use strict';

    Prod.Models.Song = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
          "title": "Unknown",
          "artist": "Unknown Artist",
          "producer":"Unknown Producer"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();

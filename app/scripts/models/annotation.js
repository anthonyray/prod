/*global Prod, Backbone*/

Prod.Models = Prod.Models || {};

(function () {
    'use strict';

    Prod.Models.Annotation = Backbone.Model.extend({

        url: '',

        initialize: function() {
          this.set('colorCode',Math.ceil(Math.random()*6))
        },

        defaults: {
          "type" : "Sample",
          "shortDescription" : "Unknown",
          "start" : 0,
          "end" : 0,
          "description" : "A description",
          "upvotes" : 0,
          "colorCode" : 1,
          "played" : false,
          "submitter" : "kindstranger"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();

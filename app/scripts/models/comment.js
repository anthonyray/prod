/*global Prod, Backbone*/

Prod.Models = Prod.Models || {};

(function () {
    'use strict';

    Prod.Models.Comment = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
          "commenterId" : "AZERTYUIOP1234567890",
          "upvotes" : 0,
          "message":"This is a comment"
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();

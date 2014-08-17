/*global Prod, Backbone*/

Prod.Collections = Prod.Collections || {};

(function () {
    'use strict';

    Prod.Collections.Comment = Backbone.Collection.extend({

        model: Prod.Models.Comment

    });

})();

/*global Prod, Backbone*/

Prod.Collections = Prod.Collections || {};

(function () {
    'use strict';

    Prod.Collections.Annotation = Backbone.Collection.extend({

        model: Prod.Models.Annotation,

        active : function(){
          return this.where({played : true});
        }

    });

})();

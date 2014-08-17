/*global Prod, Backbone*/

Prod.Routers = Prod.Routers || {};

(function () {
    'use strict';

    Prod.Routers.Annotation = Backbone.Router.extend({
      routes : {
        'a/:id' : 'swag',
        'test' : 'help'
      },

      help : function(id){
        console.log("QCtion triggered from the router");
      },

      swag : function(id){
        console.log("ok")
      }
    });

})();

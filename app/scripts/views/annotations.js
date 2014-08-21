/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Annotations = Backbone.View.extend({

        el : "#annotationsview",

        template: JST['app/scripts/templates/annotations.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        subviews : [],

        events: {},

        initialize: function (options){
            this.pubsub = {} || options.pubsub;
            this.listenTo(this.collection, 'add', this.addOne);
            this.collection.forEach(this.addOne,this);
            this.render();
        },

        render: function (){
          this.subviews.forEach(this.renderOne,this);
        },

        addOne: function(annotation){
          var view = new Prod.Views.Annotationbrief({model : annotation});
          this.subviews.push(view);

        },

        renderOne: function(view){
          this.$el.append(view.render().el);
        }

    });

})();

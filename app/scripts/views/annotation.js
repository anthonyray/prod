/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Annotation = Backbone.View.extend({

        template: JST['app/scripts/templates/annotation.ejs'],

        el : '#annotationview',

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function (options) {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        select: function(model){
          console.log(model)
        }

    });

})();

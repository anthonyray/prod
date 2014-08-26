/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Annotationbar = Backbone.View.extend({

        template: JST['app/scripts/templates/annotationbar.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
          'click' : 'select'
        },

        initialize: function (options) {
            this.pubsub = options.pubsub;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        select : function(){
          this.pubsub.trigger('annotation:select', this.model);
        }

    });

})();

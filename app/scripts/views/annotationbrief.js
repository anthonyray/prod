/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Annotationbrief = Backbone.View.extend({

        template: JST['app/scripts/templates/annotationbrief.ejs'],

        tagName: 'div',

        id: '',

        className: 'annotation filtered-out',

        events: {},

        initialize: function (options) {
            this.pubsub = options.pubsub;
            this.listenTo(this.model, 'change:played', this.played);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this
        },

        played: function(){
          this.$el.toggleClass('filtered-out');
        }

    });

})();

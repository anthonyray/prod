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

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            Prod.router.on('route:weird',this.putain);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        putain : function(){
          alert("IMGONNASWIM");
        },

    });

})();

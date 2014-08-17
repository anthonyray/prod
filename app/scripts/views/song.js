/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Song = Backbone.View.extend({
        el : '#songview',

        template: JST['app/scripts/templates/song.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();

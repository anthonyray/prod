/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Sidepanel = Backbone.View.extend({

        template: JST['app/scripts/templates/sidepanel.ejs'],

        tagName: 'div',

        el: '#sidepanelview',

        id:'',

        className: '',

        events: {},

        initialize: function (options) {
            this.pubsub = options.pubsub;
            this.render();


            var currentmodel = this.collection.find(function(model){ return model.cid == 'c3'; }); // TEMP
            this.renderAnnotation(currentmodel);

            this.listenTo(this.pubsub,'annotation:select',this.switchAnnotation);

        },

        render: function () {
            this.$el.html(this.template());
        },

        show : function(){
          this.$el.removeClass('hidden');
        },

        hide : function(){
          this.$el.addClass('hidden');
        },

        getCurrentModel : function(id){
          return this.collection.find(function(model){ return model.cid == id; });
        },

        switchAnnotation: function(obj){
          this.currentModel = this.getCurrentModel(obj.cid);
          this.currentAnnotationView.remove();
          this.render();
          this.renderAnnotation(this.currentModel);
          this.show();
        },

        renderAnnotation : function(annotationObj){
          this.currentAnnotationView = new Prod.Views.Annotation({model : annotationObj})
          this.currentAnnotationView.render();
        }

    });

})();

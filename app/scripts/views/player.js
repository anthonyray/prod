/*global Prod, Backbone, JST*/

Prod.Views = Prod.Views || {};

(function () {
    'use strict';

    Prod.Views.Player = Backbone.View.extend({

        el:'#playerview',

        template: JST['app/scripts/templates/player.ejs'],

        tagName: 'div',

        id: '',

        subviews : [],

        className: '',

        events: {
          'click .progress' : 'pause',
          'click .progressbar' : 'alertrouge'
        },

        position : 0,

        initialize: function (options) {
            this.pubsub = options.pubsub;
            this.listenTo(this.collection,'active',this.filterAll);
            this.collection.forEach(this.addAnnotation,this);
            this.render();
            this.progress = this.$('.progress');
            this.audio = new Audio('audio.mp3');
        },

        render: function () {
            this.$el.html(this.template());
            this.subviews.forEach(this.renderAnnotation,this);
        },

        play: function(){
          var self = this;
          this.audio.play();

          setInterval(function(){

            self.position = (self.audio.currentTime / self.audio.duration)*100;
            self.collection.trigger('active',self.position);
            self.progress.css('width', self.position+"%");
          }, 380);
        },

        pause : function(){
          this.audio.pause();
        },

        addAnnotation : function(model){
          this.subviews.push(new Prod.Views.Annotationbar({model : model, pubsub: this.pubsub}));
        },

        renderAnnotation: function(view){
          this.$('#annotations-container').append(view.render().el);
        },

        filterAll : function(position){
          var self = this;
          this.collection.each(function(annotation){
            self.filterOne(annotation,position);
          });
        },

        filterOne: function(annotation,position){
          if ((annotation.get('start') <= position) && (annotation.get('end') >= position )){
            annotation.set('played',true);
          }
          else {
            annotation.set('played',false);
          }
        }

    });

})();

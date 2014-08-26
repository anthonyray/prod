/*global Prod, $*/


window.Prod = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    PubSub : {},

    init: function () {
        'use strict';
        // Mock data
        var mockAnnotations = [
          new this.Models.Annotation({start : 5, end: 10, submitter : "Antho1"}),
          new this.Models.Annotation({start : 3, end: 12, submitter : "Swagstep"}),
          new this.Models.Annotation({start : 1, end: 14, submitter : "Ohjoie"}),
          new this.Models.Annotation({start : 8, end: 16, submitter : "Facialfeatures"}),
          new this.Models.Annotation({start : 12, end: 17})
        ]

        var mockCollection = new this.Collections.Annotation( mockAnnotations );

        this.pubsub = this.PubSub;

        this.router = new this.Routers.Annotation();
        Backbone.history.start({pushState: true});

        this.song  = new this.Views.Song(
          { model : new this.Models.Song(), pubsub : this.pubsub });

        this.player = new this.Views.Player(
          { collection : mockCollection, pubsub : this.pubsub  });

        new this.Views.Annotations(
          { collection : mockCollection, pubsub : this.pubsub }
        )

        new this.Views.Sidepanel({ collection : mockCollection, pubsub : this.pubsub });

        //new this.Views.Annotation({ model : mockAnnotations[2], pubsub : this.pubsub });

        this.player.play();
    }
};

$(document).ready(function () {
    'use strict';
    Prod.init();
});

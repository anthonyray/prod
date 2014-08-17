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
          new this.Models.Annotation({start : 5, end: 10}),
          new this.Models.Annotation({start : 3, end: 12}),
          new this.Models.Annotation({start : 1, end: 14}),
          new this.Models.Annotation({start : 8, end: 16}),
          new this.Models.Annotation({start : 12, end: 17})
        ]

        var mockCollection = new this.Collections.Annotation( mockAnnotations );

        this.pubsub = this.PubSub;

        this.router = new this.Routers.Annotation();
        Backbone.history.start({pushState: true});

        var song  = new this.Views.Song(
          { model : new this.Models.Song(), pubsub : this.pubsub });

        this.player = new this.Views.Player(
          { collection : mockCollection, pubsub : this.pubsub  });

        new this.Views.Annotations(
          { collection : mockCollection, pubsub : this.pubsub }
        )

        new this.Views.Annotation({model : mockAnnotations[2], pubsub : this.pubsub});

        this.player.play();
    }
};

$(document).ready(function () {
    'use strict';
    Prod.init();
});

/*global Prod, $*/


window.Prod = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
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

        var mockCollection = new this.Collections.Annotation( mockAnnotations )

        this.router = new this.Routers.Annotation();
        Backbone.history.start({pushState: true});

        var song  = new this.Views.Song(
          { model : new this.Models.Song()});

        this.player = new this.Views.Player(
          { collection : mockCollection  });

        new this.Views.Annotations(
          { collection : mockCollection }
        )

        new this.Views.Annotation({model : mockAnnotations[2]});

        this.player.play();
    }
};

$(document).ready(function () {
    'use strict';
    Prod.init();
});

define(["require", "exports"], function (require, exports) {
    //import 'bootstrap/css/bootstrap.css!';
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "Aurelia";
                config.map([
                    { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
                    { route: "flickr", moduleId: "./flickr", nav: true, title: "Flickr" },
                    { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }
                ]);
            });
        }
        return App;
    })();
    exports.App = App;
});

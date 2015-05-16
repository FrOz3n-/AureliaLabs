import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@inject(Router)
export class App {
    constructor(public router: Router) {
        this.router.configure((config) => {
            config.title = "Aurelia";
            config.map([
                { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
                { route: "flickr", moduleId: "./flickr", nav: true, title: "Flickr" },
                { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }
            ]);
        });
    }
}
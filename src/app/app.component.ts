import {
    Component,
} from "@angular/core";
import {
    Router,
    Routes
} from "@angular/router";

@Component({
    selector: "cd-app",
    template: require("./app.component.html"),
    styles: [require("./app.component.less")],
})
export class AppComponent {
    routes: Routes = []

    constructor(private router: Router) {
        this.routes = router.config;
    }
}
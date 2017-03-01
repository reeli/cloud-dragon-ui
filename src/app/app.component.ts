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
})
export class AppComponent {
    routes: Routes = []

    constructor(private router: Router) {
        this.routes = router.config;
    }
}
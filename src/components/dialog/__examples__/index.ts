import {
    NgModule,
    Component,
    OnInit

} from "@angular/core";
import { DialogModule } from "../";

@Component({
    template: require("./dialog-example.html"),
})
export class ExampleComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}

@NgModule({
    imports: [DialogModule],
    exports: [],
    declarations: [ExampleComponent],
    providers: [],
    entryComponents: [ExampleComponent],
})
export class ExampleModule {
}

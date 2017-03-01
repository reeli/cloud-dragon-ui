import { NgModule } from "@angular/core";
import { AlertMsgModule } from "../";

import {
    Component,
} from "@angular/core";

@Component({
    template: require("./alert-msg-example.html"),
})
export class ExampleComponent {
}

@NgModule({
    imports: [AlertMsgModule],
    exports: [],
    declarations: [ExampleComponent],
    providers: [],
    entryComponents: [ExampleComponent]
})
export class ExampleModule {
}

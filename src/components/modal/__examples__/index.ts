import {
    NgModule,
    Component,
    OnInit

} from "@angular/core";
import { DialogModule } from "../";

@Component({
    template: require("./modal-example.html"),
})
export class ExampleComponent implements OnInit {
    openModal: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    open() {
        this.openModal = true;
    }

    close() {
        this.openModal = false;
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

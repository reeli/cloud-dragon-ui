import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AlertMsgComponent } from "./alert-msg.component";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AlertMsgComponent,
    ],
    exports: [
        AlertMsgComponent,
    ]
})
export class AlertMsgModule {
}
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { PanelComponent } from '../panel';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        PanelComponent,
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
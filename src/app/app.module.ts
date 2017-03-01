import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";


const req = (require as any).context("src/components", true, /\/__examples__\/index.ts$/);

const exampleModules = req.keys().map((key: string) => req(key).ExampleModule);
const routes = req.keys().map((key: string) => ({
    path: key.split("/")[1],
    component: req(key).ExampleComponent,
}));

@NgModule({
    imports: [
        BrowserModule,
        ...exampleModules,
        RouterModule.forRoot(
            routes,
        ),
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


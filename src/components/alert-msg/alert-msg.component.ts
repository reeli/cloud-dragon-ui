import {
    Component,
    OnInit,
    Input,
} from "@angular/core";

type AlertType =  "success" | "info" | "warning" | "danger";


@Component({
    selector: "cd-alert-msg",
    template: require("./alert-msg.component.html"),
    styles: [require("./alert-msg.component.less")],
})
export class AlertMsgComponent implements OnInit {
    @Input() type: AlertType = "success";
    @Input() msg: string;
    @Input() autoCompleted: boolean;
    close = false;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        // console.log("ngOnChanges");
    }

    ngDoCheck() {
        // console.log("ngDoCheck");
    }

    ngAfterContentInit() {
        if (this.autoCompleted) {
            setTimeout(() => {
                this.close = true;
            }, 2000);
        }
        // console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        // console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        // console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        // console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        // console.log("ngOnDestroy");
    }
}
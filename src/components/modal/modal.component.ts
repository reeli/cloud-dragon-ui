import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
} from "@angular/core";

@Component({
    selector: "ave-modal",
    template: require("./modal.component.html"),
    styles: [require("./modal.component.less")]
})
export class ModalComponent implements OnInit {
    @Input() isOpen: boolean = false;
    @Input() title: string;
    @Input() content: string;
    @Output() close: EventEmitter<any> = new EventEmitter();

    constructor() {
    }


    ngOnInit() {
    }

    closeModal() {
        this.close.emit(this);
    }
}
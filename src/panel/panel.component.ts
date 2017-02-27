import {
    Component,
    OnInit
} from '@angular/core';

console.log(require('./panel.component.less'))
@Component({
    selector: 'cd-panel',
    template: require('./panel.component.html'),
    styles: [require('./panel.component.less')]
})
export class PanelComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

    onClick(): void {
        console.log('clicked!');
    }
}
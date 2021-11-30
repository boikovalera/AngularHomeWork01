import { Component, Input } from '@angular/core';
import { OnlyNumberInputComponent } from './onlynumber.input.component'
import { EmailInputComponent } from './email.input.componet'

@Component({
    selector: 'component-outlet',
    entryComponents: [OnlyNumberInputComponent, EmailInputComponent],
    template: `        
        <ng-container *ngComponentOutlet="currentComponent"></ng-container>
    `
})
export class AppOutletComponent {
    public componets = [OnlyNumberInputComponent, EmailInputComponent];
    public currentComponent: any;

    @Input() set type(type: string) {
        switch (type) {
            case 'onlynumber': this.currentComponent = this.componets[0]; break;
            case 'email': this.currentComponent = this.componets[1]; break;
        }
    }
}
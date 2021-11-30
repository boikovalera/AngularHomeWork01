import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-only-number', 
    template: '<input onlynumberdirective type="text"/>'
})
export class OnlyNumberInputComponent {
    private value = '';
}
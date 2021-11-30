import { Component, Input } from "@angular/core";

@Component({
    selector: 'popover',
  styles: [
    `.popover {
      font-size: 8pt;
      background-color: aliceblue;
      padding: 5px;
      width: 100px;
    }`
  ],
  template: `
      <div class="popover">
        <h3>Incorrect value</h3>
         <ng-content></ng-content>
      </div>
   `
})
export class PopoverComponent {    

}
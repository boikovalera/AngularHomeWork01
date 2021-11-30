import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppOutletComponent } from './app.outlet.componet';

import { OnlyNumberInputComponent } from './onlynumber.input.component'
import { OnlyNumberInputDirective } from './onlynumber.input.directive'

import { EmailInputComponent } from './email.input.componet'
import { EmailInputDirective } from './email.input.directive'

import { PopoverComponent } from './popover.component'

@NgModule({
  declarations: [
    AppComponent,
    AppOutletComponent,    
    OnlyNumberInputComponent,
    OnlyNumberInputDirective, 
    EmailInputComponent,
    EmailInputDirective,
    PopoverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Directive, ComponentRef, ElementRef, HostListener, Input, ViewContainerRef, ComponentFactoryResolver, TemplateRef, Injector, EmbeddedViewRef } from '@angular/core';
import { EmailInputComponent } from './email.input.componet';
import { PopoverComponent } from './popover.component'

@Directive({
    selector: '[emaildirective]'
})
export class EmailInputDirective {

    private isValid = true;

    @Input() popover!: TemplateRef<any>;
    componentRef!: ComponentRef<PopoverComponent>;
    contentViewRef?: EmbeddedViewRef<PopoverComponent>;
    
    constructor(public el: ElementRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) {
    }

    @HostListener('keyup')
    onKeyUp() {        
        this.el.nativeElement.style.borderColor = !this.isValid ? 'red' : 'initial';     
        if(this.isValid) {
            this.viewContainerRef.clear();
            this.contentViewRef = undefined;
        } else {
            if(this.contentViewRef){ return; }
            this.contentViewRef = this.popover.createEmbeddedView({});
            const componentFactory = this.resolver.resolveComponentFactory(EmailInputComponent);
            this.componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector, [this.contentViewRef.rootNodes]);
        }
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: any) {
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(event.keyCode !== 8 && !pattern.test(event.key)) {
            this.isValid = true;
        } else {
            this.isValid = false;            
        }
    }
}
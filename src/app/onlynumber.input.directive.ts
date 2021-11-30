import { Directive, ComponentRef, ElementRef, HostListener, Input, ViewContainerRef, ComponentFactoryResolver, TemplateRef, Injector, EmbeddedViewRef } from '@angular/core';
import { OnlyNumberInputComponent } from './onlynumber.input.component';
import { PopoverComponent } from './popover.component'

@Directive({
    selector: '[onlynumberdirective]'
})
export class OnlyNumberInputDirective {

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
            const componentFactory = this.resolver.resolveComponentFactory(OnlyNumberInputComponent);
            this.componentRef = this.viewContainerRef.createComponent(componentFactory, 0, this.injector, [this.contentViewRef.rootNodes]);
        }
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        if(event.keyCode !== 8 && !pattern.test(event.key)) {
            this.isValid = false;
            event.preventDefault();
        } else {
            this.isValid = true;            
        }
    }
}
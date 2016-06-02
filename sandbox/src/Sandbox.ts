import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {OsbComponentTest} from 'osb-component-test/components';

@Component({
    selector: 'sandbox',
    directives: [OsbComponentTest],
    template: `<osb-component-test></osb-component-test>`
})
export class Sandbox {
    constructor() {
        console.log('Sandbox Loaded');
    }
}

bootstrap(Sandbox);
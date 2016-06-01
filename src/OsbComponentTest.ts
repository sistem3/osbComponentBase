
import {Component} from '@angular/core';

@Component({
    selector: 'osb-component-test',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1>{{title}}</h1>
                  <h2 (click)="onClick()">{{message}}</h2>
               </div>`
})
export class OsbComponentTest {

    title = 'OSB Component Test';
    message = 'Click Me ...';

    onClick() {
        this.message = 'Sup!';
        console.log(this.message);

    }

}
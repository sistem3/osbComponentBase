import {Component} from '@angular/core';

@Component({
    selector: 'osb-component-test',
    templateUrl: 'OsbComponentTest.html',
    styleUrls: ['OsbComponentTest.css']
})
export class OsbComponentTest {

    title = '';
    message = '';

    constructor() {
        this.title = 'OSB Component Test';
        this.message = 'Loaded';
    }

}
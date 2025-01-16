import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { IonicAutoCompleteOptions } from 'projects/ionic-auto-complete/src/lib/ionic-auto-complete-options.model';

@Component({
    selector: 'simple-service',
    templateUrl: 'simple-service.component.html',
    styleUrls: [
        'simple-service.component.scss'
    ],
    standalone: false
})
export class SimpleServiceComponent {
    public options: IonicAutoCompleteOptions;

    public selected: string = '';

    constructor(
        public provider: CountryService
    ) {
        this.options = new IonicAutoCompleteOptions();

        this.options.autocomplete = 'on';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.type = 'add-friend.svg';
    }

    on(output: any, event: any): void {
        console.log(output);
        // console.log(event);
    }
}

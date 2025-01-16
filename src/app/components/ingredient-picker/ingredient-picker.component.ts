import { Component } from '@angular/core';

import { IngredientService } from '../../services/ingredient.service';
import { IngredientModel } from '../../models/ingredient.model';
import { IonicAutoCompleteOptions } from 'projects/ionic-auto-complete/src/lib/ionic-auto-complete-options.model';

@Component({
    selector: 'ingredient-picker',
    templateUrl: 'ingredient-picker.component.html',
    styleUrls: [
        'ingredient-picker.component.scss'
    ],
    standalone: false
})
export class IngredientPickerComponent {
    public newIngredient: string = '';
    public options: IonicAutoCompleteOptions;

    public selected: IngredientModel[] = [];

    constructor(
        public provider: IngredientService
    ) {
        this.options = new IonicAutoCompleteOptions();

        this.options.autocomplete = 'on';
        this.options.cancelButtonIcon = 'assets/icons/clear.svg';
        this.options.clearIcon = 'assets/icons/clear.svg';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.searchIcon = 'assets/icons/add-user.svg';
        this.options.type = 'search';
    }

    add(): void {
        const ingredient = {
            name: this.newIngredient
        };

        this.provider.add(ingredient);

        this.selected.push(ingredient);

        this.newIngredient = '';
    }

    on(output: any, event: any): void {
        if (output === 'ionAutoInput') {
            this.newIngredient = event;
        }

        console.log(output);
        // console.log(event);
    }

    reset(): void {
        this.selected = [];
    }
}

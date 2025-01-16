import { Injectable } from '@angular/core';

import { IngredientModel } from '../models/ingredient.model';
import { IonicAutoCompleteService } from 'projects/ionic-auto-complete/src/public-api';

@Injectable()
export class IngredientService implements IonicAutoCompleteService {
    labelAttribute = 'name';

    public objects: IngredientModel[] = [
        {
            name: 'Cilantro'
        },
        {
            name: 'Avocado'
        },
        {
            name: 'Onion'
        },
        {
            name: 'Pepper'
        },
        {
            name: 'Salt'
        },
        {
            name: 'Tomato'
        }
    ];

    constructor() {

    }

    add(ingredient: IngredientModel): void {
        this.objects.push(ingredient);
    }

    getResults(keyword: string): IngredientModel[] {
        keyword = keyword.toLowerCase();

        return this.objects.filter(
            (object) => {
                const value = (object as any)[this.labelAttribute].toLowerCase();

                return value.includes(keyword);
            }
        );
    }
}

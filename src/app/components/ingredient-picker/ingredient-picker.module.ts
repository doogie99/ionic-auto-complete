import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IngredientPickerComponent } from './ingredient-picker.component';

import { IngredientService } from '../../services/ingredient.service';
import { IonicAutoCompleteComponentModule } from 'projects/ionic-auto-complete/src/public-api';

@NgModule({
    declarations: [
        IngredientPickerComponent
    ],
    exports: [
        IngredientPickerComponent
    ],
    imports: [
        IonicAutoCompleteComponentModule,
        CommonModule,
        FormsModule,
        IonicModule
    ],
    providers: [
        IngredientService
    ]
})
export class IngredientPickerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CountryPickerComponent } from './country-picker.component';

import { PeopleService } from '../../services/people.service';
import { IonicAutoCompleteComponentModule } from 'projects/ionic-auto-complete/src/public-api';
import { BoldPrefix } from 'projects/ionic-auto-complete/src/lib/bold-prefix.pipe';

@NgModule({
    declarations: [
        CountryPickerComponent
    ],
    exports: [
        CountryPickerComponent
    ],
    imports: [
        IonicAutoCompleteComponentModule,
        CommonModule,
        FormsModule,
        IonicModule,
        BoldPrefix
    ],
    providers: [
        PeopleService
    ]
})
export class CountryPickerModule { }

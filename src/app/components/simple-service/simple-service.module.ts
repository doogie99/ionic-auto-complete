import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SimpleServiceComponent } from './simple-service.component';

import { CountryService } from '../../services/country.service';
import { IonicAutoCompleteComponentModule } from 'projects/ionic-auto-complete/src/public-api';

@NgModule({
    declarations: [
        SimpleServiceComponent
    ],
    exports: [
        SimpleServiceComponent
    ],
    imports: [
        IonicAutoCompleteComponentModule,
        CommonModule,
        FormsModule,
        IonicModule
    ],
    providers: [
        CountryService
    ]
})
export class SimpleServiceModule { }

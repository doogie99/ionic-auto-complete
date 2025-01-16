import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TeamPickerComponent } from './team-picker.component';

import { PeopleService } from '../../services/people.service';
import { IonicAutoCompleteComponentModule } from 'projects/ionic-auto-complete/src/public-api';

@NgModule({
    declarations: [
        TeamPickerComponent
    ],
    exports: [
        TeamPickerComponent
    ],
    imports: [
        IonicAutoCompleteComponentModule,
        CommonModule,
        FormsModule,
        IonicModule
    ],
    providers: [
        PeopleService
    ]
})
export class TeamPickerModule { }

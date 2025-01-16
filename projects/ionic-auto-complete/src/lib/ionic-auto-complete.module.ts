import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonicAutoCompleteComponent } from './ionic-auto-complete.component';
import { BoldPrefix } from "./bold-prefix.pipe";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [IonicAutoCompleteComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    BoldPrefix
],
  exports: [IonicAutoCompleteComponent]
})
export class IonicAutoCompleteComponentModule { }

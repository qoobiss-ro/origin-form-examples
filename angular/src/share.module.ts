import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FormComponent } from './app/form/form.component';
import { OriginFormModule } from '@qbs-origin/origin-form';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FormComponent,

  ],
  imports: [
    MatDialogModule,
    MaterialModule,
    ReactiveFormsModule,
    OriginFormModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatOptionModule,
    TranslateModule.forRoot()
  ],
  exports: [
    MatDialogModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatOptionModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShareModule { }

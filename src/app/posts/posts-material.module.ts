import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class PostsMaterialModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './component/tool-bar.component';
import { ToolBarMaterialModule } from './tool-bar-material.module';



@NgModule({
  declarations: [
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    ToolBarMaterialModule
  ],
  exports: [
    ToolBarComponent
  ]
})
export class ToolBarModule { }

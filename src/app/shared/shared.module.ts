import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalModule } from 'ngx-bootstrap';
import { AddMaterialComponent } from './modals/add-material/add-material.component';


@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [SidebarComponent, AddMaterialComponent],
  exports: [SidebarComponent, AddMaterialComponent],
  entryComponents: [AddMaterialComponent]
})
export class SharedModule { }

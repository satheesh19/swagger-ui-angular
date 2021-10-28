import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwaggerAdminRoutingModule } from './swagger-admin-routing.module';
import { SwaggerAdminComponent } from './swagger-admin.component';


@NgModule({
  declarations: [
    SwaggerAdminComponent
  ],
  imports: [
    CommonModule,
    SwaggerAdminRoutingModule
  ]
})
export class SwaggerAdminModule { }

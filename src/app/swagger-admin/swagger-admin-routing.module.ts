import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwaggerAdminComponent } from './swagger-admin.component';

const routes: Routes = [{ path: '', component: SwaggerAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwaggerAdminRoutingModule { }

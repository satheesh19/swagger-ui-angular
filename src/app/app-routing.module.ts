import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'swagger', loadChildren: () => 
    import('./swagger-ui/swagger-ui.module').then(m => m.SwaggerUiModule) }, 
  { path: 'swaggeradmin', loadChildren: () => 
  import('./swagger-admin/swagger-admin.module').then(m => m.SwaggerAdminModule) },
  { path: '**', redirectTo: 'swagger'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

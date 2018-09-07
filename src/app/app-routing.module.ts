import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegFileComponent } from './reg-file/reg-file.component';

const routes: Routes = [
  { path: '', component: RegFormComponent},
  { path: 'reg-form', component: RegFormComponent },
  { path: 'RegFile', component: RegFileComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegFileComponent } from './reg-file/reg-file.component';

const routes: Routes = [
  { path: '', component: RegFormComponent},
  { path: 'reg-form', component: RegFormComponent },
  { path: 'reg-file', component: RegFileComponent },
  { path: '**', component: '/full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatListModule
     } from '@angular/material';

const MODULES = [ FlexLayoutModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatListModule

];
@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ],
  declarations: []
})
export class MaterialModule { }

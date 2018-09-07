import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatListModule,
        MatRadioModule
     } from '@angular/material';

const MODULES = [ FlexLayoutModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatListModule,
  MatRadioModule

];
@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ],
  declarations: []
})
export class MaterialModule { }

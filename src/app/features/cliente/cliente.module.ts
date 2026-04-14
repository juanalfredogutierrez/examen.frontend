
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClienteListComponent } from './pages/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HttpClientModule,
    ClienteListComponent,
    ClienteFormComponent
  ]
})
export class ClienteModule {}

import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(ClienteService);
  public readonly dialogRef = inject(MatDialogRef<ClienteFormComponent>);
  private readonly data = inject(MAT_DIALOG_DATA, { optional: true });

  form = this.fb.nonNullable.group({
    id: 0,
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor() {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  save() {
    if (this.form.invalid) return;

    const value = this.form.getRawValue();

    if (value.id) {
      this.service.update(value.id, value)
        .subscribe(() => this.dialogRef.close(true));
    } else {
      this.service.create(value)
        .subscribe(() => this.dialogRef.close(true));
    }
  }
}
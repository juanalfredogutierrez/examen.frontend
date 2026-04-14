
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ClienteService } from '../../services/cliente.service';
import { ClienteFormComponent } from '../../components/cliente-form/cliente-form.component';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './cliente-list.component.html'
})
export class ClienteListComponent implements OnInit {
  clientes: any[] = [];

  constructor(private service: ClienteService, private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void { this.load(); }

  load() {
    this.service.getAll().subscribe(res => {
      this.clientes = res;
      this.cdr.detectChanges();
    });
  }

  openCreate() {
    this.dialog.open(ClienteFormComponent)
      .afterClosed().subscribe(() => this.load());
  }

  openEdit(c: any) {
    this.dialog.open(ClienteFormComponent, { data: c })
      .afterClosed().subscribe(() => this.load());
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { ApiResponse } from 'src/app/common/ApiResponse';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ClienteService {
  private api = `${environment.api.baseUrl}${environment.api.cliente}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.http
      .get<ApiResponse<Cliente[]>>(`${this.api}/ConsultaListaCliente`)
      .pipe(
        map(response => response.value) // 👈 aquí desempaquetas
      );
  }

  create(cliente: any) {
    return this.http.post(this.api, cliente);
  }

  update(id: number, cliente: any) {
    return this.http.put(`${this.api}/${id}`, cliente);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}

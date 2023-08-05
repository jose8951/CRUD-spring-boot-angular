import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Producto } from '../models/producto'

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productoURL: string = 'http://localhost:8080/producto/'
  cabeceras: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private httpClient: HttpClient) {}

  //valeriano
  /* lista():Observable<Array<Producto>> {
    return this.httpClient.get<Array<Producto>>(this.productoURL+"lista")
  }*/
  
  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista')
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`)
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(
      this.productoURL + `detailName/${nombre}`,
    )
  }

  //valeriano
  /*
  public save(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(
      this.productoURL + 'create',
      producto,
      { headers: this.cabeceras }
    )
  }*/

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto)
  }

  //valeriano
  /*
  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(
      this.productoURL + `update/${id}`,
      producto,
      { headers: this.cabeceras },
    )
  }*/

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`)
  }
}

import { Component, OnInit } from '@angular/core'
import { Producto } from '../models/producto'
import { ProductoService } from '../service/producto.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
})
export class ListaProductoComponent implements OnInit {
  productos: Producto[] = []
  //productos!:Array<Producto>

  //ToastrService agrega mensajes
  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
  ) {}
  ngOnInit() {
    this.cargarProductos()
    // this.cargaValerianoProducto()
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (data) => {
        this.productos = data
      },
      (err) => {
        console.log(err)
      },
    )
  }

  //metodo valeriano
  cargaValerianoProducto(): void {
    this.productoService.lista().subscribe({
      complete: () => console.log('comunicacion completada'),
      error: (errorRx) => {
        console.error(errorRx.error.messaje)
      },
      next: (data) => {
        console.log('Lista producto recibida con éxito')
        data.forEach((rest) => {
          console.log(
            `id= ${rest.id} nombre =${rest.nombre} precio=${rest.precio}`,
          )
        })
        this.productos = data
      },
    })
  }

  /* borrar(id: number) {
    this.productoService.delete(id).subscribe(
      (data) => {
        this.toastr.success('producto eliminado', 'ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.cargarProducto()
      },
      (err) => {
        this.toastr.error(err.error.messaje, 'fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
      },
    )
  }*/

  borrar(id: number): void {
    this.productoService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Producto eliminado ', 'ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.cargarProductos()
      },
      (err) => {
        this.toastr.error(err.console.mensaje, 'fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
      },
    )
  }
}

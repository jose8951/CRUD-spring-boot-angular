import { Component, OnInit } from '@angular/core'
import { ProductoService } from '../service/producto.service'
import { Producto } from '../models/producto'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
})
export class NuevoProductoComponent implements OnInit {
  nombre: string = ''
  precio!: number

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }

  /* onCreate(): void {
    const producto = new Producto(this.nombre, this.precio)
    this.productoService.save(producto).subscribe(
      (data) => {
        this.toastr.success('Producto creado', 'ok', {
          timeOut: 3000, positionClass:"toast-top-center",
        })
        this.router.navigate(['/'])
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'fail', {
          timeOut: 3000,positionClass:"toast-top-center",
        })
        this.router.navigate(['/'])
      },
    )
  }*/

  onCreate(): void {
    const producto = new Producto(this.nombre, this.precio)
    this.productoService.save(producto).subscribe({
      complete: () => console.log('Comunicacion completa'),
      error: (errorRx) => {
        this.toastr.error(errorRx.error.mensaje, 'fail', {
          timeOut: 3000,positionClass:"toast-top-center",
        })
        this.router.navigate(['/'])
      },
      next: (listaRestauranteTx) => {
        this.toastr.success('Producto creado', 'ok', {
          timeOut: 3000, positionClass:"toast-top-center",
        })
        this.router.navigate(['/'])
      },
    })
  }
}

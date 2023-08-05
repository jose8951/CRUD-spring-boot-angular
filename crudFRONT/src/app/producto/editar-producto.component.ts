import { Component, OnInit } from '@angular/core'
import { Producto } from '../models/producto'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductoService } from '../service/producto.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {
  producto!: Producto

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.productoService.detail(id).subscribe(
      (data) => {
        this.producto = data
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.router.navigate(['/'])
      },
    )

    //subscribe por valeriano
    /* this.productoService.detail(id).subscribe({
      complete: () => console.log('comunicación completada'),
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.router.navigate(['/'])
      },
      next: (data) => {      
        this.producto = data
      },
    })*/
  } //fin de ngOnInit

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id']
    /*  this.productoService.update(id, this.producto).subscribe(
      (data) => {
        this.toastr.success('Producto actualziado', 'ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.router.navigate(["/"])
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.router.navigate(['/'])
      },
    )*/

    this.productoService.update(id, this.producto).subscribe({
      complete: () => console.log('Comunicacion completada'),
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        })
        this.router.navigate(['/'])
      },
      next: (data) => {
        this.producto = data
        this.router.navigate(['/'])
      },
    })
  }
}

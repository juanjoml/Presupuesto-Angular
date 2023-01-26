import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private presupuestoService: PresupuestoService) {
    this.nombreGasto = "";
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = "";
   }

  ngOnInit(): void {
  }

  agregarGasto(){
    if(this.cantidad > this.presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <=0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = "Nombre gasto o cantidad incorrecta";
    }else{
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }
      this.presupuestoService.agregarGasto(GASTO);

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}

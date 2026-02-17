import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent { 

  form = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  loading: boolean = false;
  enviado: boolean = false;
  apiMessage: string = '';
  errorsFromApi: any = {};

  enviar(f: NgForm) {
    if (f.invalid) {
      this.apiMessage = 'Por favor, revisa los campos.';
      return;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.enviado = true;
      this.apiMessage = '¡Mensaje enviado con éxito!';
    }, 2000);
  }

  limpiar(f: NgForm) {
    f.resetForm();
    this.enviado = false;
  }

  hasApiError(campo: string): boolean {
    return !!this.errorsFromApi[campo];
  }

  apiError(campo: string): string {
    return this.errorsFromApi[campo] || '';
  }
}
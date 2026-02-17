import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Inicio } from './pages/inicio/inicio';
import { Categorias } from './pages/categorias/categorias';
import { Sucursales } from './pages/sucursales/sucursales';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Inicio },
      { path: 'categorias', component: Categorias },
      { path: 'sucursales', component: Sucursales },
      { path: 'contacto', component: ContactoComponent}
    ]
  }
];

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar/navbar';

@Component({
  selector: 'app-layout-publico',
  imports: [RouterOutlet,Navbar],
  templateUrl: './layout-publico.html',
  styleUrl: './layout-publico.scss',
})
export class LayoutPublico {
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' }
  ];
}

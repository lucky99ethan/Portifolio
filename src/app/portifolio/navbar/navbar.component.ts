import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(public router: Router){

}
onHome(){
  this.router.navigate(['./portifolio/home']);
}
onAbout(){
  this.router.navigate(['./portifolio/about']);
}
onContact(){
  this.router.navigate(['./portifolio/contact']);
}
onServices(){
  this.router.navigate(['./portifolio/service']);
}
}
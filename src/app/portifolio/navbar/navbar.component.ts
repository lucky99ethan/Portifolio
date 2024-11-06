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
  const about = document.getElementById('about');
  if(about){
    about.scrollIntoView({behavior: 'smooth'});
  }
}
onContact(){
  const contact = document.getElementById('contact');
  if(contact){
    contact.scrollIntoView({behavior: 'smooth'});
  }
}
onServices(){
  this.router.navigate(['./portifolio/service']);
}
}
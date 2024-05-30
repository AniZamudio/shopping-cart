import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) { }

  onSubmit(form: any): void{
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;

    //TODO: Conectar con el back

    localStorage.setItem('registeredUser', JSON.stringify({username, email, password}))
    alert('Usuario registrado correctamente')
    this.router.navigate(['login'])
  }

}

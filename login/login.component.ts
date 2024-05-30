import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AuthServiceComponent } from "../auth-service/auth-service.component"
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthServiceComponent, private router: Router) {}

  onSubmit(form: any): void {
    const { username, password } = form.value;
    this.authService.login(username, password).subscribe(success => {
      //success = true; //TODO: Retirar esto
      if (success){
        this.router.navigate(['home'])
      } else {
        alert('Usuario o contraseña incorrectos')
      }
      this.router.navigate(['home'])
    })
  }

  register(): void {
    this.router.navigate(['register'])
  }
}

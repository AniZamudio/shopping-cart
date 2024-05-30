import {Component, Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-auth-service',
  standalone: true,
  imports: [],
  templateUrl: './auth-service.component.html',
  styleUrl: './auth-service.component.css'
})

@Injectable({
  providedIn: "root"
})
export class AuthServiceComponent {
  constructor() { }
  login(username: string, password: string): Observable<boolean> {
    //TODO: Conectar con el back
    if (username){
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return of(true)
    }
      return of(false)
  }

}

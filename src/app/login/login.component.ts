import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PasswordModule} from 'primeng/password';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AutoCompleteModule, PasswordModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title='Login';
  suggestions: string[] = [];
  searchText: string = '';

}

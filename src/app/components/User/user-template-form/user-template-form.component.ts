import { Component } from '@angular/core';
import { Iuser } from '../../../models/iuser';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';



@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.scss'
})
export class UserTemplateFormComponent {
  constructor(private UserService: UsersService, private router: Router) { }

  user: Iuser = {} as Iuser;
  addUser() {
    this.UserService.signUp(this.user).subscribe({
      next: (u) => {
        console.log(u);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}

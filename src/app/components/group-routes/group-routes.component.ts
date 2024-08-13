import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-group-routes',
  standalone: true,
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './group-routes.component.html',
  styleUrl: './group-routes.component.scss'
})
export class GroupRoutesComponent {

}

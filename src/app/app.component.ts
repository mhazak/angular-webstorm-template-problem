import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";

type Create = {
  mode: 'CREATE'
}

type Update = {
  mode: 'UPDATE',
  id: number;
}

type Union = Create | Update;

type VM = {
  detail: Union;
  commonProp1: string;
  commonProp2: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  vm: VM = {
    detail: {
      mode: 'CREATE'
    },
    commonProp1: 'blabla',
    commonProp2: 'blabla2'
  }

  onClick(id: number) {

  }
}

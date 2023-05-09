import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  // imports: [CommonModule], // el CommonModule es el que permite usar directivas ng if ng for
  imports: [ CounterAloneComponent, ],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

  constructor() {
    
  }
}

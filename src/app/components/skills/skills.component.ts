import { Component } from '@angular/core';

@Component({
  selector: 'gp-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  toggleText(event: Event) {
    const element = event.currentTarget as HTMLElement;
    element.classList.toggle('hover-active');
    console.log(element);
  }
}

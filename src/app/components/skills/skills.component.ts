import { Component } from '@angular/core';

@Component({
  selector: 'gp-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  onMouseOver(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('hovered');
  }

  onMouseLeave(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('hovered');
  }
}

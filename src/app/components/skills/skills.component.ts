import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'gp-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  selectedSkill: string | null = null;
  activeButton: HTMLElement | null = null;
  toggleText(event: Event) {
    const element = event.currentTarget as HTMLElement;
    const skill = element.getAttribute('data-level');

    // Se o mesmo botão for clicado, desmarque-o
    if (this.activeButton === element) {
      this.resetSelection();
      return;
    }

    // Desmarque o botão anterior se existir
    if (this.activeButton) {
      this.activeButton.classList.remove('hover-active');
    }

    // Atualize o botão ativo e o skill selecionado
    element.classList.add('hover-active');
    this.selectedSkill = skill;
    this.activeButton = element;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    // Verifica se o clique foi fora do botão ativo
    if (this.activeButton && !this.activeButton.contains(target)) {
      this.resetSelection();
    }
  }

  private resetSelection() {
    if (this.activeButton) {
      this.activeButton.classList.remove('hover-active');
    }
    this.selectedSkill = null;
    this.activeButton = null;
  }
}

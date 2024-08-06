import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ContentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

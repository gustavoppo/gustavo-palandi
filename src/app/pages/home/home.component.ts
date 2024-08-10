import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContentComponent } from '../../components/content/content.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ContentComponent,
    LoadingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

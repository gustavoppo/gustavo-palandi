import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'gustavo-palandi';
  loader: boolean = true;
  private router = inject(Router);
  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.loader = true;
    //   } else if (event instanceof NavigationEnd) {
    //     this.loader = false;
    //   }
    // });

    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }
}

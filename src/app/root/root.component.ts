import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'Sprint Calculator';
  constructor(private router: Router) {
    this.router.events
      .pairwise()
      .subscribe((events) => {
        const event = <NavigationStart>events.filter(event => event instanceof NavigationStart)[0];
        if (event) {
          const isDark = event.url.includes('dark');

          const body = document.getElementsByTagName('body')[0];
          if (isDark) {
            body.classList.add('dark');
          } else {
            body.classList.remove('dark');
          }
        }
    });
  }
}

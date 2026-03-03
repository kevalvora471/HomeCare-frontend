import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ToastrModule],
  template: `
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('homecare-app');
}

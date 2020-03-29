import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Login Module', cols: 1, rows: 1 },
          { title: 'Dealer Module', cols: 1, rows: 1 },
          { title: 'Client Module', cols: 1, rows: 1 },
          { title: 'Results Module', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Login Module', cols: 1, rows: 2 },
        { title: 'Dealer Module', cols: 1, rows: 2 },
        { title: 'Client Module', cols: 2, rows: 1 },
        { title: 'Results Module', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

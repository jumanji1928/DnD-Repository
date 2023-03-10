import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  HomeCards = [
    {
      title: 'Offical 5e Content',
      desc: 'Offical Wizard of the coast content 5th edition!',
      btns: [
        { content: 'o', type: 'classes', title: 'Classes' },
        { content: 'o', type: 'races', title: 'Races' },
        { content: 'o', type: 'backgrounds', title: 'Backgrounds' },
        { content: 'o', type: 'spells', title: 'Spells' },
        { content: 'o', type: 'feats', title: 'Feats' },
      ],
    },
    {
      title: 'Homebrew Content',
      desc: '',
      btns: [{ content: '', type: '', title: '' }],
    },
  ];

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
            // console.log(this.currentScreenSize);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

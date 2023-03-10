import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  NavLinks = [
    { if: 'basic', link: 'home', title: 'Home' },
    { if: 'basic', link: 'create', title: 'Create A Character' },
    {
      if: 'multi',
      main_titil: 'Offical 5e Content',
      btns: [
        {
          link: '#classes',
          menu: 'classes',
          title: 'Classes',
        },
      ],
      sub_btns: [{ link: '/info/o/classes/artificer', title: 'Artificer' }],
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

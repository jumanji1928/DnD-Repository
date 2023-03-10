import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { faGears, faGavel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  faGears = faGears;
  faGavel = faGavel;

  content = '';
  type = '';

  Content = [
    {
      if: 'classes',
      title: 'Classes',
      toolbar: [
        {
          icon: faGears,
          title: 'Artificer',
          label: '',
          link: 'artificer',
          color: 'primary',
        },
        {
          icon: faGavel,
          title: 'Barbarian',
          label: '',
          link: 'barbarian',
          color: 'primary',
        },
      ],
      cardFor: [
        {
          icon: faGears,
          title: 'Artificer',
          source: "Tasha's Cauldron of Everything",
          classtype: 'Ranged Damage, Utility, Support Caster',
          desc: '<p>A tinkering support caster that can craft items for your party.</p>',
          buttons: [
            {
              title: 'More Detials',
              color: 'primary',
              link: 'artificer',
            },
          ],
          desc2:
            '<p>HitDie: d8</p><p>Primary Ability: Intelligence</p><p>Saving Throws: Constitution & Intelligence</p>',
        },
        {
          icon: faGavel,
          title: 'Barbarian',
          source: "Player's Handbook/Basic Rules",
          classtype: 'Tank, Melee Damage',
          desc: '<p>A primal warrior that relies on their rage to fuel their combat prowess.</p>',
          buttons: [
            {
              title: 'More Detials',
              color: 'primary',
              link: 'barbarian',
            },
          ],
          desc2:
            '<p>HitDie: d12</p><p>Primary Ability: Strength</p><p>Saving Throws: Constitution & Strength</p>',
        },
      ],
    },
    {
      if: 'races',
      title: 'Races',
      toolbar: [
        {
          icon: faGears,
          title: 'Human',
          label: '',
          link: 'human',
          color: 'primary',
        },
        {
          icon: faGavel,
          title: '',
          label: '',
          link: '',
          color: 'primary',
        },
      ],
      cardFor: [
        {
          icon: faGears,
          title: 'Human',
          source: "Player's Handbook/Basic Rules",
          classtype: '',
          desc: '',
          desc2: '',
          buttons: [
            {
              title: 'More Detials',
              color: 'primary',
              link: 'human',
            },
          ],
        },
      ],
    },
  ];

  defualt = [
    {
      title: 'Classes',
      desc: '',
      btns: [
        {
          content: 'o',
          type: 'classes',
          color: 'primary',
          title: 'Offical 5e',
        },
      ],
    },
    {
      title: 'Races',
      desc: '',
      btns: [
        {
          content: 'o',
          type: 'races',
          color: 'primary',
          title: 'Offical 5e',
        },
      ],
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

  constructor(
    breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
            // console.log(query);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.content = params['content'];
      this.type = params['type'];
      // console.log(this.type);
    });
  }
}

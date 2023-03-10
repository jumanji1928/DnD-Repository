import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { faGears, faGavel } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  faGavel = faGavel;
  faGears = faGears;
  type = '';
  id = '';
  displayedColumns_c: string[] = ['level', 'name'];
  displayedColumns_r: string[] = ['name'];
  artificer_table = Artificer_DATA;
  barbarain_table = Barbarian_DATA;
  clickedRows = new Set<ClassAbilitys>();
  showskills: Array<string> = [];

  datasource_c: any;
  datasource_r = Human_Data;

  content = [
    {
      typeif: 'classes',
      title: 'Classes',
      toolbar: [
        {
          icon: faGears,
          title: 'Artificer',
          link: 'artificer',
          color: 'accent',
        },
        {
          icon: faGavel,
          title: 'Barbarian',
          link: 'barbarian',
          color: 'accent',
        },
      ],
      details: [
        {
          if: 'artificer',
          title: 'Artificer',
          source: "Tasha's Cauldron of Everything",
          basic_details:
            "<h3>Hit Points</h3><p>Hit Dice: 1d8 per artificer level</p><p>Hit Points at 1st Level: 8 + your Constitution modifier</p><p>Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per artificer level after 1st</p><h3>Proficiencies</h3><p>Armor: Light armor, medium armor, shields</p><p>Weapons: Simple weapons</p><p>Tools: Thieves' tools, tinker's tools, one type of artisan's tools of your choice</p><p>Saving Throws: Constitution, Intelligence</p><p>Skiils: Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, Sleight of Hand</p><h3>Equipment</h3><p>You start with the following equipment, in addition to the equipment granted by your background: <ul><li>any two simple weapons</li><li>a light crossbow and 20 blots</li><li>Choose one:<ul><li>Studded leather armor</li><li>Scale mail armor</li></ul></li><li>thieves' tools and a dungeoneer's pack</li></ul></p><h3>Optional Rule: Firearm Proficiency</h3><p>The secrets of gunpowder weapons have been discovered in various corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in the Dungeon Master's Guide and your artificer has been exposed to the operation of such weapons, your artificer is proficient with them.</p>",
          abilitys: [
            {
              if: 'magical_tinkering',
              title: 'Magical Tinkering',
              subtitle: 'Class Level 1',
              desc: "<p>At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p> <ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul><p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p><p>You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>",
            },
            {
              if: 'a_spellcasting',
              title: 'Artifcer Spellcasting',
            },
          ],
          subclass: [],
        },
        {
          if: 'barbarian',
          title: 'Barbarian',
          source: "Player's Handbook/Basic Rules",
          basic_details:
            "<h3>Hit Points</h3><p>Hit Dice: 1d12 per barbarian level.</p><p>Hit Points at 1st Level: 12+ your Constitution modifier.</p><p>Hit Points at Higher Levels: 1d12(or 7) + Constitution modifier per barbarian level after 1st.</p><h3>Proficiencies</h3><p>Armor: Light armor, medium armor, shields</p><p>Weapons: Simple weapons, martial weapons</p><p>Tools: None</p><p>Saving Throws: Strength, Constitution</p><p>Skills: Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival</p><h3>Equipment</h3><p>You start with the following equipment, in addition to the equipment granted by your background: </p><ul><li>Choose one:<ul><li>A greataxe</li><li>Any martial melee weapon</li></ul></li><li>Choose one: <ul><li>Two handaxes</li><li>Any simple weapon</li></ul></li><li>An explorer's pack and four javelins</li></ul>",
          abilitys: [
            {
              if: 'rage',
              title: 'Rage',
              subtitle: 'Class Level 1',
              desc: "<p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p><p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p><ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using strength, you gain a bonus to the damage  roll that increases as you gain levels as a barbarian as shown in the reage Damage column of the Barbarian table.</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul><p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p><p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</p><p>Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.</p>",
            },
            {
              if: 'unarmored_defense',
              title: 'Unarmored Defense',
              subtitle: 'Class Level 1',
              desc: 'While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
            },
          ],
          subclass: [],
        },
      ],
    },
    {
      typeif: 'races',
      title: 'Races',
      toolbar: [{ link: 'human', color: '', icon: faGears, title: 'Human' }],
      details: [
        {
          if: 'human',
          title: 'Human',
          source: "Player's Handbook/Basic Rules",
          basic_details:
            '<p>Age: Humans reach adulthood in their late teens and live less than a century.</p><p>Alignment: Humans tend toward no particular alignment. The best and the worst are found amoing them.</p><p>Size: Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p>',
          abilitys: [
            {
              if: 'standard',
              title: 'Standard',
              subtitle: "Player's Handbook",
              desc: '<p>Ability Score Increase: All ability scores increase by 1.</p><p></p>',
            },
            {
              if: 'a_spellcasting',
              title: 'Artifcer Spellcasting',
            },
          ],
          subclass: [],
        },
      ],
    },
  ];

  FindTable(value: any) {
    console.log(value);
    var x: any;
    switch (value) {
      case 'artifcer':
        return this.artificer_table;
        break;
      case 'barbarian':
        return this.barbarain_table;
        break;
      default:
        return this.artificer_table;
        break;
    }
  }

  public basic_details: string = 'Hide Details';
  public basic_info: boolean = true;
  hide_basic_info() {
    if (this.basic_info == false) {
      this.basic_details = 'Hide Detials';
    } else {
      this.basic_details = 'Show Detials';
    }
    this.basic_info = !this.basic_info;
  }

  displayinfo(value: any) {
    console.log(value);
    //Hides basic Text
    this.clickedRows.add(value);
    if (this.showskills.length == 0) {
      this.showskills.push(value);
    } else {
      switch (this.showskills.includes(value)) {
        case false:
          this.showskills.push(value);
          break;
        case true:
          var temp = this.showskills.indexOf(value);
          this.showskills.splice(temp, 1);
          break;
      }
    }
  }

  displayinfo_r(value: any) {}
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
      this.type = params['type'];
      //console.log(this.type);
      this.id = params['id'];
      // console.log(this.id);
      this.datasource_c = this.FindTable(this.id);
    });
  }
}

export interface ClassAbilitys {
  name: string;
  level: number;
  button_link: string;
  // info1: number;
}

export interface RaceSubclasses {
  name: string;
  button_link: string;
}

const Artificer_DATA: ClassAbilitys[] = [
  { level: 1, name: 'Magical Tinkering', button_link: 'magical_tinkering' },
  { level: 1, name: 'Spellcasting', button_link: 'a_spellcasting' },
  { level: 2, name: 'Infuse Item', button_link: 'infuse_item' },
  {
    level: 3,
    name: 'Artificer Specialist',
    button_link: 'artificer_spelialsit_1',
  },
  {
    level: 3,
    name: 'The Right Tool for the Job',
    button_link: 'the_right_tool_for_the_job',
  },
  { level: 4, name: 'Ability Score Improvement', button_link: 'asi1' },
  {
    level: 5,
    name: 'Artificer Specialist Feature',
    button_link: 'artificer_specialist_feature_2',
  },
  { level: 6, name: 'Tool Expertise', button_link: 'tool_expertise' },
  { level: 7, name: 'Flash of Genius', button_link: 'flash_of_geniust' },
  { level: 8, name: 'Ability Score Improvement', button_link: 'asi2' },
  {
    level: 9,
    name: 'Artificer Specialist feature',
    button_link: 'artificer_specialsit_feature_3',
  },
  { level: 10, name: 'Magic Item Adept', button_link: 'magic_item_adept' },
  { level: 11, name: 'Spell-Storing Item', button_link: 'spell_storing_item' },
  { level: 12, name: 'Ability Score Improvement', button_link: 'asi3' },
  { level: 14, name: 'Magic Item Savant', button_link: 'magic_item_savant' },
  {
    level: 15,
    name: 'Artificer Specialist feature',
    button_link: 'artificer_specialist_feature_4',
  },
  { level: 16, name: 'Ability Score Improvement', button_link: 'asi4' },
  { level: 18, name: 'Magic Item Master', button_link: 'magic_item_master' },
  { level: 19, name: 'Ability Score Improvement', button_link: 'asi5' },
  { level: 20, name: 'Soul of Artifice', button_link: 'soul_of_artifice' },
];

const Barbarian_DATA: ClassAbilitys[] = [
  { level: 1, name: 'Rage', button_link: 'rage' },
  { level: 1, name: 'Unarmored Defense', button_link: 'unarmored_defense' },
];

const Human_Data: RaceSubclasses[] = [
  { name: 'Standard', button_link: 'standard' },
  { name: 'Variant', button_link: 'variant' },
];

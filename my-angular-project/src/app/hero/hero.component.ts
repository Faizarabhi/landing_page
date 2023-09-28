import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  imageSrc1: string = '/assets/elements/1.png';
  imageSrc2: string = '/assets/elements/2.png';
  imageSrc3: string = '/assets/elements/3.png';
  imageAlt: string = 'My Image Alt Text';
}

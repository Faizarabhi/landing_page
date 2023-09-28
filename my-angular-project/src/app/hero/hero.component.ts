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
  imageSrc23: string = '/assets/elements/23.jpg';
  imageSrc4: string = '/assets/elements/4.png';
  imageSrc14: string = '/assets/elements/14.jpg';
  imageSrc16: string = '/assets/elements/16.jpg';
  imageSrc17: string = '/assets/elements/17.jpg';
  imageSrc18: string = '/assets/elements/18.jpg';
  imageSrc19: string = '/assets/elements/19.jpg';
  imageSrc10: string = '/assets/elements/10.png';
  imageSrc25: string = '/assets/elements/25.png';
  imageSrc24: string = '/assets/elements/24.png';
  imageAlt: string = 'My Image Alt Text';
}

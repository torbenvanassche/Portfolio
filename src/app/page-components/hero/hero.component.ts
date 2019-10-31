import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() width: number;
  @Input() height: number;

  path: string;

  constructor() {
    window.onresize = () => this.ngOnInit();
  }

  ngOnInit() {
    this.width = window.innerWidth;
    console.log(window.innerHeight);
    this.height = window.innerHeight - 70 + 16 - 100;

    this.path = 'https://via.placeholder.com/' + this.width + 'x' + this.height;
  }
}

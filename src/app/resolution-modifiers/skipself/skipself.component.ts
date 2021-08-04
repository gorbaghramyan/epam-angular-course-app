import { Component, SkipSelf } from '@angular/core';
import { LeafService } from '../leaf.service';

@Component({
  selector: 'app-skipself',
  templateUrl: './skipself.component.html',
  styleUrls: ['./skipself.component.css'],
  providers: [{ provide: LeafService, useValue: { emoji: '🍁' } }]
})
export class SkipselfComponent {
  constructor(@SkipSelf() public leaf: LeafService) { }
}
import { Component } from '@angular/core';
import { STAR_WARS_WIKI_CHARACTERS } from '../assets/star-wars-mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars Characters';
  starWarsCharacters = STAR_WARS_WIKI_CHARACTERS;
}

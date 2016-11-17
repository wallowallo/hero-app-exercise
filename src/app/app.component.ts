import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero-app!';
  hero: Hero = {
    id: 1;
    name: 'Merp-Man';
  };
}

export class Hero {
  id: number;
  name: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  posts = [
    {
    titre: 'Mon premier post',
    content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard impression depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
    loveIts: '-3',
    created_at: '2019/08/08'
    },
    {
    titre: 'Mon deuxième post',
    content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    loveIts: '-3',
    created_at: '2019/08/12'
    },
    {
    titre: 'Mon toisième post',
    content: 'Le Lorem Ipsum est le faux texte standard impression depuis les années 1500',
    loveIts: 2,
    created_at: '2019/08/17'
    },
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      } , 2000
     );
  }
  onLoveIt() {
    console.log('I love it !');
  }
}

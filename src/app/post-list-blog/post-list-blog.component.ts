import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-blog',
  templateUrl: './post-list-blog.component.html',
  styleUrls: ['./post-list-blog.component.scss']
})
export class PostListBlogComponent implements OnInit {
  @Input() postTitre: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }
  getPostLoveIts() {
    return this.postLoveIts;
  }
  getValueLoveIts() {
    if (this.postLoveIts > 0) {
      return 'positif';
    }
    return 'négatif';
  }
  getColor() {
    if ( this.getValueLoveIts() === 'positif') {
      return 'rgb(0,100,0)';
    }
    return 'rgb(139, 0,0)';
  }
  getBackgroundColor() {
    if ( this.getValueLoveIts() === 'positif') {
      return 'rgba(102,205,170,0.5';
    }
    return 'rgba(255, 0, 0, 0.5)';
  }

}

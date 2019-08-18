import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListBlogComponent } from './post-list-blog.component';

describe('PostListBlogComponent', () => {
  let component: PostListBlogComponent;
  let fixture: ComponentFixture<PostListBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

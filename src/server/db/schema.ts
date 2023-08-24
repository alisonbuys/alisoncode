export interface MyappPosts {
  id: string;
  title: string;
  content: string;
}

export interface DB {
  "myapp.posts": MyappPosts;
}

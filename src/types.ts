export type Post = {
  content: string;
  id: number;
  image?: string;
  likes: number;
  author: User;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
};

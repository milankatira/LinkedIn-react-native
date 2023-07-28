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
  experience?: Experience[];
};

export type Experience = {
  id: string;
  title: string;
  companyName: string;
  companyImage: string;
};

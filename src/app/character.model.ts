// character.model.ts
export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}



export interface APiResponse {
  items: Character[];
  meta: any;
  links: any;
}
export interface CartoonCharacter {
  items: Character[];
  meta: any;
  links: any;
}


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface User {
  id: number;
  name : string;
  avatar: string;
  createdAt: string;
}
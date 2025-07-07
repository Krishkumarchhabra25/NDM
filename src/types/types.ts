// types.ts

export interface Article {
  title: string;
  subheading: string;
  description: string;
  image: string;
  author?: string; // optional for sections like 'articles'
}

export interface MainArticle {
  title: string;
  subheading: string;
  description: string;
  image: string;
}

export interface MainFeatureItem {
  title: string;
  subheading: string;
  description?: string;
  image: string;
}

export interface DataType {
 main: MainFeatureItem[],
   left: Article[];
  right: Article[];
  articles: Article[];
  latest: Article[];
  mostRead: Article[];
}

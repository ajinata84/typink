export interface Genre {
  genreId: number;
  genreTitle: string;
}

export interface User {
  userId: string;
  username: string;
}

export interface Chapter {
  chapterId: number;
  chapterTitle: string;
  content: string;
  created_at: string;
}

export interface Literature {
  literatureId: number;
  title: string;
  synopsis: string;
  imageUrl: string;
  genre: Genre;
  users: User;
  chapters: Chapter[];
}

export interface ForumPost {
  forumId: number;
  created_at: string;
  userId: string;
  title: string;
  genreId: number;
  forumType: string;
  voteCount: number;
}

export interface ForumComment {
  forumCommentId: number;
  content: string;
  userId: string;
  users: {
    username: string;
  };
  created_at: Date;
  vote: string;
  voteCount: number;
}

export interface LiteratureComment {
  literatureCommentId: number;
  content: string;
  userId: string;
  users: {
    username: string;
  };
  created_at: Date;
  vote: string;
  voteCount: number;
}

export interface ChapterComment {
  chapterCommentId: number;
  content: string;
  userId: string;
  users: {
    username: string;
  };
  created_at: Date;
  vote: string;
  voteCount: number;
}

export interface ForumData {
  forumId: number;
  title: string;
  content: string;
  genreId: number;
  forumType: string;
  userId: string;
  created_at: string;
  users: User;
  forumComments: ForumComment[];
  vote: string;
  voteCount: number;
}

export interface LiteratureData {
  literatureId: number;
  created_at: string;
  authorId: string;
  title: string;
  synopsis: string;
  imageUrl: string;
  genreId: number;
  language: string;
  copyright: number;
  voteCount: number;
  genre: {
    genreId: number;
    created_at: string;
    genreTitle: string;
  };
  chapters: {
    chapterId: number;
    created_at: string;
    literatureId: number;
    chapterTitle: string;
    chapterNumber: number;
    imageUrl: string;
    content: string;
    voteCount: number;
  }[];
  users: {
    username: string;
    userId: string;
  };
  vote: string;
}

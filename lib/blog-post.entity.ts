export interface BlogPost {
    title: string;
    date: string;
    coverImage: CoverImage;
    content: string;
    slug: string;
    excerpt: string;
}

export interface CoverImage {
    src: string;
    width: number;
    height: number;
    alt: string;
}

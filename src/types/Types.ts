export interface Route{
    name: string;
    path: string;
}

export interface NavButton{
    name: string;
    path: string;
}

export interface Heading{
    depth: number;
    slug: string;
    text: string;
}

export interface Toc extends Heading{
    children : Heading[]
}

export interface MarkdownPost{
    
}

// export interface FrontMatter{
//     title: string;
//     pubDate: Date;
//     description: string;
//     author: string;
//     tags: string[];
//     slug: string;
//     category: string;
// }


export interface MetaData{
    title: string;
    pubDate: Date;
    description: string;
    author: string;
    tags: string[];
    slug: string;
    category?: string;
}

export interface CollectionMeta{
    collections: MetaData[];
    collectionName: string;
}
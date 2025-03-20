import { getCollection, getEntry, render, type DataEntryMap } from "astro:content"
import type { CollectionMeta, MetaData, Toc } from "../types/Types";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import generateToc, { type TocItem } from "./GenerateToc";

const regx = /^\d+/;
const orderCollection = (a:string,b:string) => {
    const upperA = a.toUpperCase();
    const upperB = b.toUpperCase();
    if(upperA < upperB) return -1;
    if(upperB > upperA) return 1;
    return 0;
}

const orderByNum = (a:string, b:string) => {
    let castA  = a.match(regx)!;
    let castB  = b.match(regx)!;
    return Number.parseInt(castA![0])-Number.parseInt(castB![0]);
    
}

export const collectionMetadata = async (name : keyof DataEntryMap) : Promise<CollectionMeta> => {
    const collection = await getCollection(name);
    return {
        collections: collection.map(col=>col.data).sort((a,b)=>orderByNum(a.title, b.title)),
        collectionName: collection[0].collection
    } as CollectionMeta;
}

export interface MarkdownContent{
    Content: AstroComponentFactory;
    toc : TocItem[];
    frontmatter : MetaData
}

export const getMarkdownContent = async (collectionName: keyof DataEntryMap, slug: string) : Promise<MarkdownContent> => {
    const entry = await getEntry(collectionName, slug);
    if (!entry) throw new Error('Could not find the post');
    // console.log(entry)
    const {Content, headings} = await render(entry);
    const toc = generateToc(headings);
    return {
        Content: Content,
        toc: toc,
        frontmatter : entry.data
    }
}


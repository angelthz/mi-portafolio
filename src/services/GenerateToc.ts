import type { MarkdownHeading } from 'astro';
export interface TocItem extends MarkdownHeading {
	children: TocItem[];
}

function diveChildren(item: TocItem, depth: number): TocItem[] {
	if (depth === 1) {
		return item.children;
	} else {
		// e.g., 2
		return diveChildren(item.children[item.children.length - 1], depth - 1);
	}
}

export default function generateToc(headings: MarkdownHeading[], title = 'Overview', slug="overview") {
	const overview = { depth: 2, slug: slug, text: title };
	headings = [...headings.filter(({ depth }) => depth > 1 && depth < 5)];
	const toc: Array<TocItem> = [];

	for (const heading of headings) {
		if (toc.length === 0) {
			toc.push({
				...heading,
				children: [],
			});
		} else {
			const lastItemInToc = toc[toc.length - 1];
			if (heading.depth < lastItemInToc.depth) {
				throw new Error(`Orphan heading found: ${heading.text}.`);
			}
			if (heading.depth === lastItemInToc.depth) {
				// same depth
				toc.push({
					...heading,
					children: [],
				});
			} else {
				// higher depth
				// push into children, or children' children alike
				const gap = heading.depth - lastItemInToc.depth;
				const target = diveChildren(lastItemInToc, gap);
				target.push({
					...heading,
					children: [],
				});
			}
		}
	}
	return toc;
}
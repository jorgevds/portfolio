import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), "_posts");

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs();

    const posts = slugs
        .filter((slug) => !slug.includes("template.md"))
        .map((slug) => getPostBySlug(slug, fields))
        // descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};
    // Ensure only the minimal needed data is exposed
    // Mighty for loops are faster than for each
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] === "slug") {
            items[fields[i]] = realSlug;
        }
        if (fields[i] === "content") {
            items[fields[i]] = content;
        }

        if (typeof data[fields[i]] !== "undefined") {
            items[fields[i]] = data[fields[i]];
        }
    }

    return items;
}

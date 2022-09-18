import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { BlogPost } from '../../lib/blog-post.entity';

interface BlogEntryProps {
    post: BlogPost;
}

export const BlogEntry: React.FC<BlogEntryProps> = ({ post }) => {
    const { coverImage } = post;
    const excerptLines = post.excerpt.split("<br>");

    return (
        <li className="pb-8 cursor-pointer">
            <Link href={`/blog/${post.slug}`}>
                <a title={post.title}>
                    <section className="p-4 transition duration-300 ease-in-out shadow-sm minlg:hover:shadow-md">
                        <h3 className="pb-4 text-xl">{post.title}</h3>
                        <Image
                            src={coverImage.src}
                            width={coverImage.width}
                            height={coverImage.height}
                        />
                        {excerptLines.map((line: string, index: number) => (
                            <p
                                className={`md:pt-4 ${
                                    index % excerptLines.length ? "pt-4" : ""
                                }`}
                                key={`Excerpt line at positon: ${index}`}
                            >
                                {line}
                            </p>
                        ))}
                    </section>
                </a>
            </Link>
        </li>
    );
};

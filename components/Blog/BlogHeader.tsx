import Image from 'next/image';
import React from 'react';

import { CoverImage } from '../../lib/blog-post.entity';

interface BlogHeaderProps {
    title: string;
    coverImage: CoverImage;
    date: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
    title,
    coverImage,
    date,
}) => {
    return (
        <section className="pb-8">
            <h2 className="pt-2 text-3xl">{title}</h2>
            <p className="pb-4">
                <time dateTime={date}>{date}</time>
            </p>
            <Image
                src={coverImage.src}
                width={coverImage.width}
                height={coverImage.height}
            />
        </section>
    );
};

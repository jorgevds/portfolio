import React from "react";

import { BlogEntry } from "../components/Blog/BlogEntry";
import { Layout } from "../components/Layouts/Layout";
import { getAllPosts } from "../lib/blog-api";
import { BlogPost } from "../lib/blog-post.entity";

interface BlogPageProps {
    allPosts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ allPosts }) => {
    return (
        <Layout>
            <article className="p-4 minlg:w-largeClamp minlg:m-auto minlg:px-8">
                <h2 className="py-4 text-2xl">Blog</h2>
                <ul>
                    {allPosts.map((post) => (
                        <BlogEntry
                            post={post}
                            key={`post entry with title: ${post.title}`}
                        />
                    ))}
                </ul>
            </article>
        </Layout>
    );
};

export default BlogPage;

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "coverImage",
        "excerpt",
    ]);

    return {
        props: { allPosts },
    };
};

import Link from "next/link";
import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";
import { Mermaid } from "../../components/Blog/BlogDiagram";

import { BlogHeader } from "../../components/Blog/BlogHeader";
import { Layout } from "../../components/Layouts/Layout";
import { getAllPosts, getPostBySlug } from "../../lib/blog-api";
import { BlogPost } from "../../lib/blog-post.entity";
import CustomErrorPage from "../404";

type PostProps = {
    post: BlogPost;
    morePosts: BlogPost[];
    preview?: boolean;
};

const Post: React.FC<PostProps> = ({ post }) => {
    // Pause server side rehydration until Mermaid has initialized
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) return null;
    if (!post?.title) {
        return <CustomErrorPage />;
    }

    return (
        <Mermaid>
            <Layout>
                <article className="p-4 minlg:p-12 minlg:w-largeClamp minlg:m-auto ">
                    <BlogHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                    />
                    <section
                        className="markdown"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></section>
                    <p className="pt-12 pb-4">- Jorge</p>
                    <p className="">
                        <Link href="/blog">
                            <a className="italic text-blue hover:underline">
                                Read my other posts too
                            </a>
                        </Link>
                    </p>
                </article>
            </Layout>
        </Mermaid>
    );
};

export default Post;

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "content",
        "coverImage",
    ]);

    const result = await remark()
        .use(html, { sanitize: false })
        .process(post.content || "");

    const content = result.toString();

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post: any) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}

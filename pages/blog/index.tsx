import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { BlogPost, Layout } from "components";
import { NextSeo } from "next-seo";
import { GoogleAdsenseContainer } from "components/GoogleAdsenseContainer";
import Head from "next/head";

const Posts: NextPage<{ posts: Post[] | null }> = ({ posts }) => {
  return (
    <Layout>
      <>
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1103570262283389"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <NextSeo title="All Posts" description="All Posts" />
        <div className="flex space-y-4">
          <div className="w-8/12">
            <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>
            <p className="text-lg">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
            <div className="flex flex-col space-y-8">
              {posts &&
                posts.map((post) => <BlogPost key={post.title} post={post} />)}
            </div>
          </div>
          <div className="w-4/12">
            <div className="side-adsense">
              <GoogleAdsenseContainer
                client="ca-pub-1103570262283389"
                slot="1884465413"
              />
            </div>
          </div>
        </div>
        <div className="veltical-adsense">
          <GoogleAdsenseContainer
            client="ca-pub-1103570262283389"
            slot="7069058074"
          />
        </div>
      </>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = allPosts.map((post) => {
    return {
      title: post.title,
      description: post.description,
      content: post.body,
      publishedAt: post.publishedAt,
      slug: post.slug,
    };
  });

  return { props: { posts: posts } };
}

export default Posts;

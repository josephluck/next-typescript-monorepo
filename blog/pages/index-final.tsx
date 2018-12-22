import * as React from "react";
import { NextStatelessComponent } from "next";
import Link from "next/link";
import { sdk, Models } from "@acme/api";
import { Layout, Heading, PostPreview } from "@acme/design";

interface Props {
  posts: Models.Post[];
}

const BlogIndex: NextStatelessComponent<Props> = ({ posts }) => {
  return (
    <Layout>
      <Heading>Acme's blog</Heading>
      {posts.map(post => (
        <Link passHref href={`/${post.id}`} key={post.id}>
          <a>
            <PostPreview post={post} />
          </a>
        </Link>
      ))}
    </Layout>
  );
};

BlogIndex.getInitialProps = async () => {
  const posts = await sdk.posts.get();
  return { posts };
};

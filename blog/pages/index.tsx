import * as React from "react";
import { NextStatelessComponent } from "next";
import Link from "next/link";
import { Models } from "@acme/api/server";
import { apiClient } from "@acme/api/client";
import { Layout } from "@acme/design/components";

interface Props {
  posts: Models.Post[];
}

const BlogIndex: NextStatelessComponent<Props> = ({ posts }) => {
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link passHref href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

BlogIndex.getInitialProps = async () => {
  const posts = await apiClient.posts.getListing();
  return { posts };
};

export default BlogIndex;

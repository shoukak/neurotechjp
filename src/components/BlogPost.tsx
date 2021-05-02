import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Markdown } from "./Markdown";
import { PostData } from "~/hooks/loader";
import { PostMeta } from "./PostMeta";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, datePublished } = post;
  return (
     <>
      <Header />
      <div className="blog-content">
                    <PostMeta post={post} />
        <div className="blog-content--top">
          <div className="blog-content--top-pic">
            {post.bannerPhoto && (
        <img src={post.bannerPhoto} />
      )}
          </div>
          <div className="blog-content--top-date">{datePublished} </div>
        </div>
        <div className="blog-content--draft">
          <div className="blog-content--draft-title">{title}</div>
          <div className="blog-content--draft-text">
            <Markdown source={post.content} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
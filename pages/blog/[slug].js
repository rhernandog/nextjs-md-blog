/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
// import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/single-post.module.css";
import { blurData } from "../../public/blurData";

export default function SinglePost({ data, slug, content }) {
  const { title, date, author, cover_image } = data;
  return (
    <div className="w-full md:w-11/12 xl:w-4/5 2xl:w-3/4 mx-auto px-4 py-8 md:py-12 xl:py-16">
      
      <h1
        className="text-2xl lg:text-4xl font-bold w-full text-center mb-8"
      >
        {title}
      </h1>
      <div className="flex mb-4 w-full sm:w-auto items-center">
        <img
          className="border border-indigo-300 rounded-full h-8 md:h-12 mr-4"
          style={{ height: "32px" }}
          src="/images/user.svg"
          alt="user"
        />
        <span className="text-gray-700 text-lg">by {author}</span>
      </div>
      <div className="flex mb-4 w-full sm:w-auto items-center">
        <img
          className="border border-indigo-300 rounded-full h-8 md:h-12 mr-4"
          style={{ height: "32px" }}
          src="/images/calendar.svg"
          alt="date"
        />
        <span className="text-gray-700">Posted on {date}</span>
      </div>
      <div className={styles["post-image"]}>
        <Image
          alt="Post Image"
          src={`/${cover_image}`}
          layout="fill"
          placeholder="blur"
          blurDataURL={blurData}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: marked(content) }}
        className={styles.singlePostContent}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data, content } = matter(markdownWithMeta);
  return {
    props: {
      data,
      slug,
      content
    }
  };
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostCard from "../components/PostCard";
import sortByDate from "../utils/sortByDate";


export default function Posts ({ posts }) {
  return (
    <div
      className="w-full md:w-11/12 xl:w-4/5 2xl:w-3/4 mx-auto px-4 py-8 md:py-12 xl:py-16 flex flex-wrap justify-center content-start"
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <h1 className="w-full text-center text-3xl font-bold mb-8">Latest Posts</h1>
      {
        posts.map((post) => <PostCard
          key={post.frontMatter.id} 
          post={post.frontMatter}
          slug={post.slug}
        />)
      }
    </div>
  );
};

export async function getStaticProps() {
  const postsFiles = fs.readdirSync( path.join("posts") );
  const posts = postsFiles.map((postFile) => {
    const slug = postFile.replace(".md", "");
    const fileContent = fs.readFileSync(path.join("posts", postFile), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return { slug, frontMatter };
  });

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  };
};

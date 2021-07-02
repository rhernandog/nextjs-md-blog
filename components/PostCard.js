import Image from "next/image";
import Link from "next/link";
import blurImageData from "../public/blur-bg.jpg";

export default function PostCard({ post, slug }) {
  return (
    <div
      className="w-full sm:w-4/5 md:w-1/2 xl:w-1/3 p-4"
    >
      <Link href={`/blog/${slug}`}>
        <a>
          <div
            className="relative w-full border transition-shadow bg-gray-50 border-gray-300 rounded-md cursor-pointer hover:shadow-lg"
          >
            <div className="postcard-image w-full relative">
              <Image
                alt="HomeBG"
                src={post.cover_image}
                layout="fill"
                placeholder="blur"
                blurDataURL={blurImageData}
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="w-full p-4">
              <h1 className="text-lg mb-2 font-semibold">{post.title}</h1>
              <h1 className="mb-2">Posted on {post.date}</h1>
              <h1 className="text-lg mb-2 font-semibold">Posted by {post.author}</h1>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

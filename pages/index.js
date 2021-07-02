import Head from 'next/head';
import Image from 'next/image';
import bgImage from "../public/home-bg.jpg";

const containerStyles = {
  height: "100vh",
  marginTop: "-70px",
  paddingTop: "70px"
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Markdown Blog</title>
        <meta name="description" content="Simple blog created with nextjs using markdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="w-full bg-gray-700 flex justify-center items-center relative"
        style={containerStyles}
      >
        <div className="absolute w-full z-0 h-screen opacity-10 inset-0">
          <Image
            alt="HomeBG"
            src={bgImage}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="w-full relative">
          <h1 className="w-full md:w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto px-4 mb-8 text-right font-bold text-4xl md:text-5xl text-gray-100 uppercase">Markdown</h1>
          <h1 className="w-full md:w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto px-4 mb-8 text-right font-bold text-4xl md:text-5xl text-gray-100 uppercase">NextJS</h1>
          <h1 className="w-full md:w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto px-4 mb-8 text-right font-bold text-4xl md:text-5xl text-gray-100 uppercase">Blog</h1>
        </div>
      </div>
    </div>
  )
}

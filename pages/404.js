import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Error () {
  return (
    <div
      className="w-full bg-gray-200 flex flex-col justify-center"
      style={{ height: "100vh" }}
    >
      <h1 className="w-full text-center font-semibold text-2xl">Couldn't find the page you're looking for</h1>
      <div className="w-full text-center text-lg mt-8">
        <Link href="/">
          <a className="bg-gray-600 rounded-md px-8 py-2 text-gray-100 font-semibold hover:bg-gray-700">Home</a>
        </Link>
      </div>
    </div>
  );
};

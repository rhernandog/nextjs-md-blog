import Image from 'next/image'

const Footer = ({ isHome, isError }) => {
  if (isError) return "";
  
  return (
    <footer className={`w-full flex justify-end px-4 py-6 bg-gray-700 text-gray-100${isHome ? " hidden" : ""}`}>
      <h1 className="text-lg font-semibold">
        MD Blog &copy; {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;

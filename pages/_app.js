import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {  
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const isError = pathname === "/404";

  // console.log("app page render, route pathname:", pathname, Date.now());
  return <>
    <Header isHome={isHome} isError={isError} />
    <Component {...pageProps} />
    <Footer isHome={isHome} isError={isError} />
  </>
}

export default MyApp

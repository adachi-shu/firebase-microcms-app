import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Zen_Kaku_Gothic_Antique } from "@next/font/google";
import { Noto_Sans_JP } from "@next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ZenKakuGothicAntique_normal = Zen_Kaku_Gothic_Antique({
  weight: "400",
  subsets: ["cyrillic"],
});
const ZenKakuGothicAntique_bold = Zen_Kaku_Gothic_Antique({
  weight: "700",
  subsets: ["cyrillic"],
});

const NotoSansJP_normal = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"]
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
         font-family: ${NotoSansJP_normal.style.fontFamily};
       }
     `}</style>
     <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

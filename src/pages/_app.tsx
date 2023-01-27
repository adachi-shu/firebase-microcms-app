import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Zen_Kaku_Gothic_Antique } from "@next/font/google";
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



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
         font-family: ${ZenKakuGothicAntique_normal.style.fontFamily},
           ${ZenKakuGothicAntique_bold};
       }
     `}</style>
     <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

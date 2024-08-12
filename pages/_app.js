import "@/styles/globals.css";
import { Nunito } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}

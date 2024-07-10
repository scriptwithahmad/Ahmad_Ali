import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Faq from "./components/Faq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/about/user">go to user</Link>
      <Faq />
    </main>
  );
}

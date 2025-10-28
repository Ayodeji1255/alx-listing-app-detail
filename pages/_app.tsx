import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { Quicksand } from "next/font/google";

import "@/styles/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.variable}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

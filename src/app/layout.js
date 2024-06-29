import { Sora, Poppins } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Sora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Trio.TO, where you can find tech events in Toronto",
  description:
    "Trio.TO is a community to helping future designers, developers, and entrepreneurs join an exciting hackathon event in Toronto. We provide engaging articles on tech and valuable resources to boost your knowledge and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${poppins.variable}`}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}

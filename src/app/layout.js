import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import "aos/dist/aos.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Talha Ahmed - Full Stack Developer | Enterprise Web Solutions",
   description:
      "Professional Full Stack Developer specializing in React.js, Next.js, Node.js. Building scalable web applications, e-commerce platforms, and digital solutions. 50+ projects delivered with 100% client satisfaction.",
   keywords:
      "Full Stack Developer, React Developer, Next.js Developer, Web Development, JavaScript, Node.js, Portfolio, Web Solutions, E-commerce Development, Pakistan Developer, Frontend Developer, Backend Developer",
   authors: [{ name: "Talha Ahmed" }],
   creator: "Talha Ahmed",
   publisher: "Talha Ahmed",
   robots: "index, follow",

   // Open Graph Meta Tags
   openGraph: {
      title: "Talha Ahmed - Full Stack Developer | Enterprise Web Solutions",
      description:
         "Professional Full Stack Developer specializing in React.js, Next.js, Node.js. Building scalable web applications and digital solutions.",
      url: "https://talha-insights.vercel.app",
      siteName: "Talha Insights",
      images: [
         {
            url: "/og-img-new.png",
            width: 1200,
            height: 630,
            alt: "Talha Ahmed - Full Stack Developer",
         },
      ],
      locale: "en_US",
      type: "website",
   },

   // Twitter Meta Tags
   twitter: {
      card: "summary_large_image",
      title: "Talha Ahmed - Full Stack Developer",
      description:
         "Professional Full Stack Developer building scalable web solutions",
      images: ["/og-img-new.png"],
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            {/* Favicon Links */}
            <link rel="icon" href="/favicon.ico" />
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

            {/* Canonical URL */}
            <link rel="canonical" href="https://talha-insights.vercel.app" />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <NavBar />
            {children}
            <Footer />
         </body>
      </html>
   );
}

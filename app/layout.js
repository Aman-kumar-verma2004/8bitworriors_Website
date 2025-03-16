import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TechLoader from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "8 Bit Warriors",
  description: "8 Bit Warriors is a team of developers who are passionate about learning and sharing their knowledge with the community.",
  image: "/logo.png",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <TechLoader />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  dark`}
      >
        {children}
      </body>
    </html>
  );
}

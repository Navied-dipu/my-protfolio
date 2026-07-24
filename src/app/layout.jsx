import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/sections/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Dipu | React & Next.js Specialist",
  description: "Portfolio of Dipu, a React and Next.js Specialist building high-performance web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased`}
      >
        <Providers>
          <div className="bg-bg-primary min-h-screen selection:bg-text-primary selection:text-bg-primary">
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

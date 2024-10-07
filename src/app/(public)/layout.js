import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <div className={inter.className}>
        <header className="py-2 bg-white">
          <nav className="w-full">
            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <a href="/">LOGO</a>
                </div>
                <div>
                  <ul className="flex flex-row gap-6">
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/work">Work</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="../../admin">Admin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-5 max-w-5xl mx-auto px-6 md:px-12 xl:px-6"> 
          {children} 
        </main>
      </div>
  );
}

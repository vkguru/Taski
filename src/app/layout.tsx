import type { Metadata } from "next";
import Image from 'next/image';
import Link from "next/link";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taski",
  description: "Effectively manage your todo task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <header className="w-full">
          <nav className="max-w-[1500px] mx-auto py-8 px-5 flex justify-between">
            <Link href="/">
              <Image src="/images/logo.png" alt="taski logo" width={83} height={26} />
            </Link>
            <div className="flex items-center">
              <p className="font-semibold text-primary">John</p>
              <Image 
                src="/images/john-profile-pic.png" 
                alt="profile picture" 
                width={47} 
                height={70} 
                className="rounded-full pl-2" 
              />
            </div>
          </nav>
        </header>
        <main className="max-w-[1500px] px-5 mx-auto">
          {children}
        </main>
        <footer className="w-full fixed bottom-0 bg-gradient-to-t from-white h-[200px]"></footer>
      </body>
    </html>
  );
}

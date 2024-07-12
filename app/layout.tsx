
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

import { getServerSession } from "next-auth";
import  SessionProvider  from "@libs/SessionProvider";



const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
        <body className={inter.className}>
          <SessionProvider session={session}>
            <div className="">
              <Navbar  />
              {children}
            </div>
          </SessionProvider>
        </body>
    </html>
  );
}

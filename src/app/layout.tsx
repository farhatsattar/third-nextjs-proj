
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./component/navbar";
import image2 from "../public/image2.jpg"


const inter = Inter({ subsets: ["latin"],variable:'--inter' });

export const metadata: Metadata = {
  title: " Dental surgery clinic App",
  description: "Generated by  farhat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}> 
        <div>
        <Navbar/>
        </div>
        <header className="bg-blue-300 p-5 flex  gap-5 max-w-screen-2xl  justify-around ">
        
        
        

        <Link href="/" >Home</Link>
        <Link href={"/Services" }>Services</Link>
        
        
        
        <Link href={"/About"}>About</Link>
        
        <Link href={"/About/Contact"}>Contact</Link>
        <Link href={"/Team"}>Team</Link>
        
        <Link href={"/ForAppointment"}>ForAppointment</Link>
        
        
        



        </header>
        
      
        
        {children}
        
       
        
        <footer className="bg-gray-600 p-5 text-justify place-items-center first-letter:">
          <Link href={"/Visit us"} > Visit us:<div>Asghar Hospital Basement,
    ghazali road Samanabad Lahore</div></Link>
          
          
          
          
          

          
          </footer>
      </body>
    </html>
  );
}
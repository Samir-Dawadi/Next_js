import { ReactNode } from "react";
import "./globals.css"
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({children}:Readonly<{children:ReactNode}>){
  return (<>
  <html lang="en">
    <body>
      <Header/>
      <h1>{children}</h1>
      <Footer/>
    </body>
  </html>
  </>)
}
import { ReactNode } from "react";
import "../globals.css"
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

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
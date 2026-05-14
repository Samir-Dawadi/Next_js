import { ReactNode } from "react";
import "../globals.css"
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home Page for Eommerce",
    description: "Share garda dekhini extra info like if we share insta photos then first image , tilte and description "
}

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
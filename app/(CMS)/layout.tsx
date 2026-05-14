import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
    title: "CMS Page Detail",
    description: ""
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (<html>
        <body>

            {children}
        </body>
    </html>

    )
}








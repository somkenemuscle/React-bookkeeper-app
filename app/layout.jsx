import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export const metadata = {
    title: 'Book-Keeper',
    description: 'Book-Keeping for receipts',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet"></link>
        </head>
      
            <body>
               <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

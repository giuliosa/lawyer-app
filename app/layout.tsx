import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header/header'
import Footer from './components/footer'

export const metadata: Metadata = {
    title: 'Leonardo Portela Advogados',
    description: 'Lorem Ipsum', // TODO: Get a better description later
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

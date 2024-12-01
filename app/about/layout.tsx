import type { Metadata } from 'next'
// import './globals.css'

export const metadata: Metadata = {
    title: 'Sobre Nós - Leonardo Portela Advogados',
    description: 'Lorem Ipsum about', // TODO: Get a better description later
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main>
            <h1>Sobre nós</h1>
            {children}
        </main>
    )
}

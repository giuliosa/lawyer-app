import Logo from './logo'

export default function Header() {
    return (
        <header className="fixed w-full">
            <div className="flex justify-center bg-zinc-950 py-2 font-sans text-buttered-rum-50">
                <div className="container flex justify-between text-xs">
                    <div className="flex gap-8">
                        <p>info@leonardoportela.com.br</p>
                        <p>Rua Aleatória, nº 39, Boa Viagem, Recife-PE</p>
                    </div>
                    <div>Siga-nos:</div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <div className="container flex items-center justify-between">
                    <Logo className="w-52 fill-white" />
                    <nav>
                        <ul className="flex gap-20 font-sans text-buttered-rum-50">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="py-5 hover:cursor-pointer hover:border-b-2 hover:border-buttered-rum-700">Home</li>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="py-5 hover:cursor-pointer hover:border-b-2 hover:border-buttered-rum-700">
                                    Sobre
                                </li>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="py-5 hover:cursor-pointer hover:border-b-2 hover:border-buttered-rum-700">Blog</li>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="py-5 hover:cursor-pointer hover:border-b-2 hover:border-buttered-rum-700">
                                    Contato
                                </li>
                            </a>
                        </ul>
                        <button></button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

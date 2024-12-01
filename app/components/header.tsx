export default function Header() {
    return (
        <header className="fixed w-full">
            <div className="text-buttered-rum-50 flex justify-center bg-zinc-950 py-2 font-sans">
                <div className="container flex justify-between text-xs">
                    <div className="flex gap-8">
                        <p>E-mail</p>
                        <p>Endereço</p>
                    </div>
                    <div>Siga-nos:</div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <div className="container flex items-center justify-between">
                    <div>logo</div>
                    <nav>
                        <ul className="text-buttered-rum-50 flex gap-12 font-sans">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="hover:border-buttered-rum-700 p-5 hover:cursor-pointer hover:border-b-2">Home</li>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="hover:border-buttered-rum-700 p-5 hover:cursor-pointer hover:border-b-2">Sobre</li>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="hover:border-buttered-rum-700 p-5 hover:cursor-pointer hover:border-b-2">Blog</li>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <li className="hover:border-buttered-rum-700 p-5 hover:cursor-pointer hover:border-b-2">
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

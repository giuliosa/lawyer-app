export default function Footer() {
    return (
        <footer className="text-buttered-rum-50 w-full bg-zinc-800 py-16">
            <div className="container mx-auto grid grid-cols-4 gap-28">
                <div>
                    <div className="text-buttered-rum-800 mb-12 font-serif text-xl">
                        Leonardo <br /> Portela
                    </div>
                    <div className="font-sans text-sm">
                        <ul>
                            <li className="mb-5">Rua Aleatória, nº 39, Boa Viagem, Recife-PE</li>
                            <li className="mb-5">info@leonardoportela.com.br</li>
                        </ul>
                    </div>
                    <div className="font-sans text-sm">
                        <span className="mb-12">Siga-nos:</span>
                        <div>3 icones</div>
                    </div>
                </div>
                <div>
                    <div className="mb-12 font-serif font-bold uppercase">Serviços</div>
                    <ul>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Labor and Employment</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Intellectual Property</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Property and Construction</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Banking and Finance</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Legal IT services</li>
                    </ul>
                </div>
                <div>
                    <div className="mb-12 font-serif font-bold uppercase">Links</div>
                    <ul>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Labor and Employment</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Intellectual Property</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Property and Construction</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Banking and Finance</li>
                        <li className="w-44 border-b-[1px] py-2 font-sans text-sm">Legal IT services</li>
                    </ul>
                </div>
                <div className="flex flex-col font-sans text-sm">
                    <div className="mb-12 font-serif font-bold uppercase">Entre em contato</div>
                    <div className="border-buttered-rum-800 hover:bg-buttered-rum-800 mb-20 flex justify-center border-2 px-5 py-3 text-lg font-bold text-white transition-colors hover:cursor-pointer">
                        81-99999-6666
                    </div>
                    <span className="font-sans text-sm text-zinc-500">Lorem Ipsum Dolor Sit Amet</span>
                    <span className="text-buttered-rum-800 font-sans text-sm">Desenvolvido por Giulio Sá </span>
                </div>
            </div>
        </footer>
    )
}

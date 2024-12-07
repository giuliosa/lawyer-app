import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../logo'
import NavigationAnchor from './navigation-anchor'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <header className="fixed w-full">
            <div className="flex justify-center bg-zinc-950 py-2 font-sans text-buttered-rum-50">
                <div className="container flex justify-between text-xs">
                    <div className="flex gap-8">
                        <div className="flex flex-row">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-3 text-buttered-rum-700" />
                            <p>info@leonardoportela.com.br</p>
                        </div>
                        <div className="flex flex-row">
                            <FontAwesomeIcon icon={faLocationDot} className="mr-2 w-3 text-buttered-rum-700" />
                            <p>Rua Aleatória, nº 39, Boa Viagem, Recife-PE</p>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div>Siga-nos:</div>
                        <a href="https://facebook.com" target="_blank" className="mx-2">
                            <FontAwesomeIcon icon={faFacebook} className="w-4 text-buttered-rum-700" />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="mx-2">
                            <FontAwesomeIcon icon={faInstagram} className="w-4 text-buttered-rum-700" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="mx-2">
                            <FontAwesomeIcon icon={faLinkedin} className="w-4 text-buttered-rum-700" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <div className="container flex items-center justify-between">
                    <Logo className="w-52 fill-white" />
                    <div className="flex items-center">
                        <nav className="mr-9">
                            <ul className="flex gap-20 font-sans text-buttered-rum-50">
                                <NavigationAnchor link="" text="Home" />
                                <NavigationAnchor link="work-services" text="Serviços" />
                                <NavigationAnchor link="about" text="Sobre" />
                                <NavigationAnchor link="blog" text="Blog" />
                                <NavigationAnchor link="contact" text="Contato" />
                            </ul>
                        </nav>
                        {/* <div className="w-30 flex h-10 items-center justify-center border-2 border-buttered-rum-800 px-3 font-sans text-sm uppercase text-white transition-colors hover:cursor-pointer hover:bg-buttered-rum-800">
                            <a href="">Contate-nos</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

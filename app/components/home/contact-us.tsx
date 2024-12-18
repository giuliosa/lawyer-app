import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
    return (
        <section className="my-9 flex flex-row-reverse">
            <div className="flex w-1/2 flex-col items-start pb-32">
                <div className="size-24 bg-laser-800 p-6">
                    <FontAwesomeIcon icon={faPenNib} className="size-12 text-buttered-rum-50" />
                </div>
                <h3 className='text-buttered-rum-700" mb-5 mt-32 px-9 text-start font-serif uppercase'>Contact US</h3>
                <h4 className="pl-30 mb-5 px-9 text-start font-serif text-4xl uppercase text-zinc-900">
                    Request a Free Call back
                </h4>
                <form action="" className="mb-9 grid grid-cols-2 gap-4 px-9">
                    <input type="text" placeholder="Nome*" className="bg-cello-100 p-4" />
                    <input type="text" placeholder="E-mail*" className="bg-cello-100 p-4" />
                    <input type="text" placeholder="Telefone*" className="col-span-2 bg-cello-100 p-4" />
                    <textarea placeholder="Detalhes*" className="col-span-2 bg-cello-100 p-4"></textarea>
                </form>
                <button className="mx-9 flex justify-center border-2 border-buttered-rum-800 bg-buttered-rum-800 px-9 py-3 font-bold uppercase text-white transition-colors hover:cursor-pointer hover:bg-white hover:text-buttered-rum-800">
                    Enviar
                </button>
            </div>
            <div className="w-1/2 bg-poster-8 bg-cover bg-center bg-no-repeat"></div>
        </section>
    )
}

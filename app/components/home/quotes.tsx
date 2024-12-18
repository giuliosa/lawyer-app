import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IQuoteProps {
    title: string
    text: string
    authorName: string
    authorType: string
}

export interface QuoteProps {
    quote: IQuoteProps
}

export default function Quotes({ quote }: QuoteProps) {
    return (
        <section className="my-24 flex flex-row">
            <div className="flex w-1/2 flex-col items-end pb-32">
                <div className="flex size-24 bg-laser-800 p-6">
                    <FontAwesomeIcon icon={faQuoteRight} className="size-12 text-buttered-rum-50" />
                </div>
                <div className="mt-9 flex flex-col items-end text-end">
                    <h4 className="pl-30 mb-5 px-9 font-serif text-3xl uppercase text-zinc-900">{quote.title}</h4>
                    <p className="mb-5 pl-44 pr-9 text-end font-sans">{quote.text}</p>
                    <div className="grid grid-flow-col grid-rows-2 justify-items-end px-9">
                        <span className="row-span-1 font-sans text-lg uppercase text-buttered-rum-700">{quote.authorName}</span>
                        <span className="row-span-1 font-sans">{quote.authorType}</span>
                        <div className="row-span-2 ml-4 size-16 bg-poster-9 bg-cover"></div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-banner-7 bg-cover bg-center bg-no-repeat"></div>
        </section>
    )
}

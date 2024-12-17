import { faGavel, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

interface ICardExpertiseProps {
    icon: IconDefinition
    title: string
    text: string
    ctaPath: string
    imageClass: string
}

export interface CardExpertiseProps {
    description: ICardExpertiseProps
}

export default function CardExpertise({ description }: CardExpertiseProps) {
    return (
        <div className="w-1/3 bg-zinc-700">
            <div className={twMerge('h-64 w-full bg-cover', description.imageClass)}></div>
            <div className="flex items-center">
                <div className="flex size-16 items-center justify-center bg-laser-800 text-cello-50">
                    <FontAwesomeIcon icon={description.icon} className="size-9" />
                </div>
                <h5 className="ml-9 font-serif text-2xl uppercase text-cello-50">{description.title}</h5>
            </div>
            <div className="p-5 font-sans text-cello-50">
                <p>{description.text}</p>
                <a href="" className="mt-9 block font-sans font-bold uppercase text-buttered-rum-600">
                    View More
                </a>
            </div>
        </div>
    )
}

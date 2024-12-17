import { faLandmark, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { twMerge } from 'tailwind-merge'

interface ICardDescriptionProps {
    icon: IconDefinition
    title: string
    subTitle: string
    text?: string
    ctaText: string
    link: string
    imageClass: string
    reverse?: boolean
}

export interface CardDescriptionProps {
    description: ICardDescriptionProps
}

export default function CardDescription({ description }: CardDescriptionProps) {
    return (
        <section className={twMerge('flex', description.reverse ? 'flex-row-reverse' : 'flex-row')}>
            <div className={twMerge('flex w-1/2 flex-col pb-32', description.reverse ? 'items-start' : 'items-end')}>
                <div className="size-24 bg-laser-800 p-6">
                    <FontAwesomeIcon icon={description.icon} className="size-12 text-buttered-rum-50" />
                </div>
                <h3
                    className={twMerge(
                        'text-buttered-rum-700" mb-5 mt-32 px-9 font-serif uppercase',
                        description.reverse ? 'text-start' : 'text-end'
                    )}
                >
                    {description.title}
                </h3>
                <h4
                    className={twMerge(
                        'pl-30 mb-5 px-9 font-serif text-4xl uppercase text-zinc-900',
                        description.reverse ? 'text-start' : 'text-end'
                    )}
                >
                    {description.subTitle}
                </h4>
                <p className={twMerge('mb-5 px-9 text-end font-sans', description.reverse ? 'text-start' : 'text-end')}>
                    {description.text}
                </p>
                <a className="px-9 font-sans font-bold uppercase text-buttered-rum-700">{description.ctaText}</a>
            </div>
            <div className={twMerge('w-1/2 bg-center bg-no-repeat', description.imageClass)}></div>
        </section>
    )
}

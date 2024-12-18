import { twMerge } from 'tailwind-merge'

interface IProfessionalProps {
    image: string
    name: string
    jobTitle: string
}

interface ProfessionalProps {
    professional: IProfessionalProps
}

export default function CardProfessional({ professional }: ProfessionalProps) {
    return (
        <div className="flex flex-col">
            <div className={twMerge('mb-9 size-72 bg-cover', professional.image)}></div>
            <span className="font-serif text-lg uppercase text-buttered-rum-700">{professional.name}</span>
            <span className="font-sans text-buttered-rum-700">{professional.jobTitle}</span>
        </div>
    )
}

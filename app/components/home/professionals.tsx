import CardProfessional from './card-professional'

const professionals = [
    {
        image: 'bg-poster-3',
        name: 'Leonardo Portela',
        jobTitle: 'Founder and CEO',
    },
    {
        image: 'bg-poster-1',
        name: 'Brenda Shaw',
        jobTitle: 'Civil Attorney',
    },

    {
        image: 'bg-poster-4',
        name: 'Roberta Lawrence',
        jobTitle: 'Civil Attorney',
    },

    {
        image: 'bg-poster-5',
        name: 'Bernanrd Roberst',
        jobTitle: 'Civil Attorney',
    },
]

export default function Professionals() {
    return (
        <section className="mb-12">
            <div className="container mx-auto">
                <div className="flex">
                    <h4 className="mb-9 font-serif text-3xl uppercase text-buttered-rum-700">Devoted Professionals</h4>
                </div>
                <div className="flex gap-9">
                    {professionals.map((item, index) => {
                        return <CardProfessional professional={item} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

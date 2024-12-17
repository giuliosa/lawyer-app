import { faGavel, faPenNib, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import CardExpertise from './card-expertise'

export default function FieldsOfExpertise() {
    const cardExpertiseItems = [
        {
            icon: faGavel,
            title: 'Corporate Law',
            text: 'Objectively innovate empowered manufactured products whereas parallel platforms holisticly predominate. ',
            ctaPath: '',
            imageClass: 'bg-banner-1',
        },
        {
            icon: faScaleBalanced,
            title: 'Settlements',
            text: 'Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly visualize quality.  ',
            ctaPath: '',
            imageClass: 'bg-banner-5',
        },
        {
            icon: faPenNib,
            title: 'Employment',
            text: 'Holistically pontificate installed base portals after maintainable products capital without superior collaboration and idea. ',
            ctaPath: '',
            imageClass: 'bg-banner-3',
        },
    ]
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                        <h3 className="mb-5 mt-32 font-serif uppercase text-buttered-rum-700">Fields of Expertise</h3>
                        <h4 className="mb-5 pr-40 font-serif text-4xl uppercase text-zinc-900">
                            Advice on a full range <br /> of corporate law matters
                        </h4>
                    </div>
                    <a href="" className="mb-5 items-end font-sans text-lg font-bold uppercase text-buttered-rum-700">
                        Ver todos
                    </a>
                </div>

                <div className="flex gap-9">
                    {cardExpertiseItems.map((item, index) => {
                        return <CardExpertise description={item} key={index} />
                    })}
                </div>
            </div>
        </section>
    )
}

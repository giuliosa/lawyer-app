// import Image from "next/image";

import { faLandmark, faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import CardDescription, { CardDescriptionProps } from './components/home/card-description'
import WelcomeBanner from './components/home/welcome-banner'

export default function Home() {
    const descriptionCard = {
        title: 'FIELDS OF EXPERTISE',
        icon: faLandmark,
        subTitle: 'ADVICE ON A FULL RANGE OF CORPORATE LAW MATTERS',
        text: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
        ctaText: 'Request a Consultation',
        link: '',
        imageClass: 'bg-poster-2 bg-top',
    }
    const descriptionCard2 = {
        title: 'OUR MISSION',
        icon: faScaleBalanced,
        subTitle: 'AT GOLDENBLATT, WE ARE DRIVEN BY THE SHARED VISION OF SUCCESS, NOT FEES.',
        ctaText: 'View More',
        link: '',
        imageClass: 'bg-banner-6',
        reverse: true,
    }
    return (
        <section>
            <WelcomeBanner />
            <section id="cards">
                <CardDescription description={descriptionCard} />
                <CardDescription description={descriptionCard2} />
            </section>
        </section>
    )
}

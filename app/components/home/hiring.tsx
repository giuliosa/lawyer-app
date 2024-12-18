import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hiring() {
    return (
        <section className="bg-banner-8 mx-auto flex w-full flex-col items-center gap-4 bg-cover bg-fixed bg-center bg-no-repeat p-24 text-center text-buttered-rum-50">
            <FontAwesomeIcon icon={faGraduationCap} className="size-14" />
            <h4 className="font-serif text-4xl uppercase">
                Hiring new <br /> Interns
            </h4>

            <p className="w-96 text-center font-sans">
                We are hiring at the moment. For all our current vacancies, see lower on this page. We are always excited to speak
                to anyone wishing to join the firm and to provide information.
            </p>
            <span className="mt-4 font-sans text-lg uppercase hover:cursor-pointer">Apply Today</span>
        </section>
    )
}

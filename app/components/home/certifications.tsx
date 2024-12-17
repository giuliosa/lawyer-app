import Image from 'next/image'

export default function Certifications() {
    return (
        <section className="py-5">
            <div className="container mx-auto flex flex-row justify-center gap-5">
                <Image src="/client-logo-01.png" alt="" width={180} height={180} />
                <Image src="/client-logo-02.png" alt="" width={180} height={180} />
                <Image src="/client-logo-03.png" alt="" width={180} height={180} />
                <Image src="/client-logo-01.png" alt="" width={180} height={180} />
                <Image src="/client-logo-02.png" alt="" width={180} height={180} />
                <Image src="/client-logo-03.png" alt="" width={180} height={180} />
            </div>
        </section>
    )
}

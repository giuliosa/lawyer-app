export default function WelcomeBanner() {
    return (
        <section className="h-[700px] w-full bg-banner-2 bg-cover bg-fixed bg-no-repeat pb-16 pt-52 font-serif">
            <div className="container mx-auto">
                <h1 className="my-10 w-96 text-6xl font-normal text-white">Corporate Law Matters</h1>
                <div className="flex w-52 items-center justify-center border-2 border-buttered-rum-800 px-5 py-3 font-sans text-lg uppercase text-white transition-colors hover:cursor-pointer hover:bg-buttered-rum-800">
                    <a href="#cards">Veja mais</a>
                </div>
            </div>
        </section>
    )
}

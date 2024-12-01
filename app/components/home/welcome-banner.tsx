export default function WelcomeBanner() {
    return (
        <section className="bg-cello-950 h-screen w-full pb-16 pt-52 font-serif">
            <div className="container mx-auto">
                <span className="text-buttered-rum-700 text-2xl font-normal">Full Range</span>
                <h1 className="my-10 w-96 text-5xl font-normal text-white">Corporate Law Matters</h1>
                <div className="hover:text-buttered-rum-50 text-buttered-rum-700 flex items-center font-sans text-xl font-normal uppercase transition">
                    <div className="bg-buttered-rum-700 mr-2 block h-[1px] w-10"></div> <a href="">Veja mais</a>
                </div>
            </div>
        </section>
    )
}

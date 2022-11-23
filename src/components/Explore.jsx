import Button from "./Button"

const Explore = () => {
    return (
        <section className="mt-64 min-h-[400px] mb-16 lg:mb-4">
            <div className="container mx-auto h-full">
                <div className='bg-explore bg-cover p-14 space-y-4 '>
                    <div className="lg:max-w-[300px] space-y-2">
                        <h3 data-aos='fade-right'
                            data-aos-offset='400' className="text-3xl lg:text-4xl font-bold">Explore product in new way</h3>
                        <p data-aos='fade-right'
                            data-aos-offset='500' className="text-sm">We specialize in creating visual identities for products and branda in your company.</p></div>
                    <form data-aos='fade-up'
                        data-aos-offset='200' className='flex flex-col lg:flex-row space-y-4 gap-x-4 items-center gap-5 lg:space-y-0'>
                        <input type="text" placeholder="Your Email" className='circlePurple  h-12 px-4 focus:outline-none rounded-md z-10 text-black' />
                        <Button>start</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Explore
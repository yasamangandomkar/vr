import AboutSlider from "./AboutSlider"
const About = () => {
    return (
        <div>
            <div className="  circlePurple p-9 space-y-10 rounded-lg max-h-[400px]">
                <div className="text-center">
                    <h1 data-aos='fade-down'
                        data-aos-offset='300' data-aos-delay="1600" className="text-3xl mb-3 lg:text-5xl lg:mb-6">What our clients say</h1>
                    <p data-aos='fade-down'
                        data-aos-delay="1800"
                        data-aos-offset='400' className="max-w-2xl mx-auto mb-12 lg:mb-24 text-sm">See what our customer say about us. It really matter for us. How good or bad
                        we will make ir for evaluation to make EhyalLive better.</p>
                </div>
                <div >
                    <AboutSlider />
                </div>
            </div>
        </div>
    )
}

export default About
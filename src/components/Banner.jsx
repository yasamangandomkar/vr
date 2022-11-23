import image from '../assets/image/banner-img.png'
import Button from './Button'
import Users from './Users'
const Banner = () => {
    return (
        <div className='flex min-h-[600px]  mt-12 lg:mt-0 flex-col lg:flex-row justify-center items-center'>
            <div
                className='flex-1 text-center lg:text-left space-y-6'>
                <h1 data-aos="fade-down" data-aos-delay="400" className='font-primary lg:text-5xl font-bold lg:leading-snug text-3xl -mt-12'>Let’s Explore
                    <br /> Three-Dimensional
                    visual</h1>
                <p data-aos="fade-down" data-aos-delay="500" className='font-secondary max-w-[440px]'>With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
                <div data-aos="fade-down" data-aos-delay="600" className='my-5 flex space-x-4 flex-col lg:flex-row space-y-4 items-center'>
                    <Button>Get It Now</Button>
                    <button className='btn'>Explore Device</button>
                </div>
                <Users />
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className='flex-1'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Banner
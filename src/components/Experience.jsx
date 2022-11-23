import vector3 from '../assets/image/vector 3.png'
import vector4 from '../assets/image/vector 4.png'
import Button from './Button'
const Experience = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center mt-32 space-y-6 lg:space-y-0 mb-12'>
            <div className="flex flex-1 space-x-6 lg:space-x-12">
                <div data-aos="fade-down" data-aos-offset="400" className='self-start'>
                    <img src={vector3} alt="" />
                </div>
                <div className='self-end' data-aos="fade-up" data-aos-offset="400">
                    <img src={vector4} alt="" />
                </div>
            </div>
            <div data-aos="fade-left" data-aos-offset="400" className='flex-1 space-y-5'>
                <h1 className=' max-w-[400px] lg:text-4xl text-3xl font-primary text-bold'>New Experience In
                    Playing Game</h1>
                <p className='max-w-[400px] text-secondary'>You can try playing the game with a
                    new style and of course a more real
                    feel, like you are the main character
                    in your game and adventure in this
                    new digital world.</p>
                <Button>Get It</Button>
            </div>
        </div>
    )
}

export default Experience
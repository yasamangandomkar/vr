import avatar1 from '../assets/image/avt1.png'
import avatar2 from '../assets/image/avt2.png'
import avatar3 from '../assets/image/avt3.png'
import avatar4 from '../assets/image/avt4.png'
import { BsFillCircleFill } from 'react-icons/bs'
const Users = () => {
    return (
        <div data-aos="fade-down" data-aos-delay="900" className='flex  items-center space-x-4   flex-col lg:flex-row'>
            <div className='flex -space-x-2'>
                <div className='w-12 h-12 rounded-full'><img src={avatar1} alt="" /></div>
                <div className='w-12 h-12 rounded-full'><img src={avatar2} alt="" /></div>
                <div className='w-12 h-12 rounded-full'><img src={avatar3} alt="" /></div>
                <div className='w-12 h-12 rounded-full'><img src={avatar4} alt="" /></div>
            </div>
            <div className='flex items-center space-y-4 mb-6 lg:space-y-0 lg:mb-0 space-x-2 font-secondary'>
                <BsFillCircleFill size={10} className='animate-pulse text-green-5000 text-xs' />
                <span className='text-sm'>400k people online</span>
            </div>
        </div>
    )
}

export default Users
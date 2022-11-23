// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { slider } from '../data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const AboutSlider = () => {
    return (
        <Swiper
            data-aos='fade-up'
            data-aos-delay="2000"
            data-aos-offset='400'
            className='h-[280px]'
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
        >
            {slider.map((slide) => {
                const { message, image, name, email } = slide
                return (
                    <SwiperSlide key={slide.id} className='rounded-lg p-4 lg:p-6 min-h-[240px] circlePurple'>
                        <p className='mb-8 min-h-[100px] text-[15px]'>{message}</p>
                        <div className='flex flex-col items-start gap-2  md:flex-row'>

                            <img src={image} alt="" className='w-14' />
                            <div className='flex flex-col  gap-y-1 '>
                                <span className='font-medium text-base'>{name}</span>
                                <span className='font-medium text-rose-600'>{email}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })

            }

        </Swiper>
    )
}

export default AboutSlider
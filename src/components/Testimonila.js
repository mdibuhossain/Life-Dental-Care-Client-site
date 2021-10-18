import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import useAPI from '../Hook/useAPI';
import SectionTitle from './SectionTitle';

// Import Swiper styles
import 'swiper/swiper-bundle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const Testimonila = () => {
    const { testimonialList } = useAPI();
    return (
        <div className="md:w-10/12 w-9/12 mx-auto mb-20">
            <SectionTitle
                title="Testimonials"
                subtitle="What Our Patients Say About Us"
            />
            <Swiper
                height={'100px'}
                effect={'coverflow'}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }}
                grabCursor={true}
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide chage')}
                onSwiper={swiper => console.log(swiper)}
                pagination={{ clickable: true }}
            >
                {
                    testimonialList.map(comment => {
                        return (
                            <SwiperSlide>
                                <div className="border py-10 px-12 flex flex-col mx-auto rounded-xl">
                                    <h3 className="text-2xl">{comment.title}</h3>
                                    <p className="text-gray-500 my-5">{comment.comment}</p>
                                    <div className="flex items-center">
                                        <img className="rounded-full w-16 mr-5" src={comment?.user?.img} alt="" />
                                        <div>
                                            <p>{comment?.user?.name}</p>
                                            <small className="text-gray-500">{comment?.user?.occupation}</small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default Testimonila;
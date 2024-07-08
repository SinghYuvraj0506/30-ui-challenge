import React from 'react';
import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import EmailForm from '../../../components/forms/EmailForm';

import image1 from '../../../assets/images/herosection/1.png';
import image2 from '../../../assets/images/herosection/2.png';
import image3 from '../../../assets/images/herosection/3.png';
import image4 from '../../../assets/images/herosection/4.png';

import icon1 from '../../../assets/svg/shield-tick.svg';
import icon2 from '../../../assets/svg/tag.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Main = () => {
    return (
        <div className="w-full h-max py-32 mb-64" id="mainCont">
            <div className="flex items-start justify-center relative w-full">
                <div
                    className={clsx(
                        config.others.tag01,
                        config.typography.head24Normal,
                        'text-primary absolute bottom-10 lg:bottom-8 -left-10 lg:left-14 -rotate-[12deg] extra-tag'
                    )}
                >
                    <img src={icon1} alt="" />
                    Safe & Secure
                </div>
                <section className="flex flex-col gap-8 items-center justify-center z-20 relative">
                    <div className={clsx(config.typography.head64, 'flex flex-col')}>
                        <h1>
                            Join the{' '}
                            30-Days
                        </h1>
                        <h1>UI Design Challenge!</h1>
                    </div>

                    <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                        Unlock Your Creative Potential with 30 Days of UI Challenges and Inspirational Insights.
                    </span>

                    <div className="mt-8 email-form">
                        <EmailForm />
                    </div>
                </section>

                <div
                    className={clsx(
                        config.others.tag01,
                        config.typography.head24Normal,
                        'text-primary absolute right-5 -top-20 lg:top-0 rotate-[11deg] extra-tag'
                    )}
                >
                    <img src={icon2} alt="" />
                    100% Free
                </div>
            </div>

            <div
                className="absolute -bottom-72 left-0 w-full h-[350px] z-10 flex items-center justify-center"
                style={{ background: 'linear-gradient(rgb(255, 255, 255) 5%, rgb(215, 212, 241) 56.21%)' }}
            >
                <div className="overflow-x-hidden">
                    <Swiper
                        slidesPerView={4}
                        speed={1000}
                        spaceBetween={30}
                        centeredSlides={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={image1} alt="" className="w-[389px] h-[250px] rounded-3xl object-contain" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image2} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image3} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image4} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image1} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image2} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image3} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image4} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OuterWrapper(Main, 'relative');

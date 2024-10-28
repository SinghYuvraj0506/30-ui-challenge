import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import EmailForm from '../../../components/forms/EmailForm';

import image1 from '../../../assets/images/herosection/1.webp';
import image2 from '../../../assets/images/herosection/2.webp';
import image3 from '../../../assets/images/herosection/3.webp';
import image4 from '../../../assets/images/herosection/4.webp';
import image5 from '../../../assets/images/herosection/5.webp';

import curve1 from '../../../assets/svg/curve1.svg';

import icon1 from '../../../assets/svg/shield-tick.svg';
import icon2 from '../../../assets/svg/tag.svg';
import { FC } from 'react';

type Props = {
    openSuccessModal: (value?:string) => void
}

const Main:FC<Props> = ({openSuccessModal}) => {
    return (
        <div className="w-full h-max py-32 mb-48 lg:mb-64" id="mainCont">
            <div className="flex items-start justify-center relative w-full">
                <div
                    className={clsx(
                        config.others.tag01,
                        config.typography.head24Normal,
                        'text-primary absolute -top-16 left-0 sm:top-auto lg:top-auto sm:bottom-10 lg:bottom-8 sm:-left-10 lg:left-14 -rotate-[12deg] extra-tag'
                    )}
                >
                    <img src={icon1} alt="" className='w-4 sm:w-6 lg:w-8'/>
                    No Spam
                </div>
                <section className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center z-20 relative">
                    <div className={clsx(config.typography.head64, 'flex flex-col items-center')}>
                        <h1 className='flex items-center relative'>
                            Join the 30-Days
                            <span className='absolute -right-5 sm:-right-7 lg:-right-9'>
                                <img src={curve1} alt="" className='w-[153px] sm:w-[226px] lg:w-[296px]'/>
                            </span>
                        </h1>
                        <h1>UI Design Challenge!</h1>
                    </div>

                    <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                        Unlock Your Creative Potential with 30 Days of UI Challenges and Inspirational Insights.
                    </span>

                    <div className="mt-8 email-form w-[82%] sm:w-auto">
                        <EmailForm onSubmit={openSuccessModal}/>
                    </div>
                </section>

                <div
                    className={clsx(
                        config.others.tag01,
                        config.typography.head24Normal,
                        'text-primary absolute right-5 -top-24 sm:-top-20 lg:top-0 rotate-[11deg] extra-tag'
                    )}
                >
                    <img src={icon2} alt="" className='w-4 sm:w-6 lg:w-8'/>
                    100% Free
                </div>
            </div>

            <div
                className="absolute -bottom-48 lg:-bottom-72 left-0 w-full h-max py-10 z-10 flex items-center justify-end no-scrollbar"
                style={{ background: 'linear-gradient(rgb(255, 255, 255) 5%, rgb(215, 212, 241) 56.21%)' }}
                id="slider-container"
            >
                <div className="w-full h-max flex items-center gap-5 justify-start overflow-hidden">
                    <img src={image1} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-contain" />
                    <img src={image2} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image3} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image4} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image5} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image1} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-contain" />
                    <img src={image2} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image3} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image4} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                    <img src={image5} alt="" className="w-[328px] h-[202px] lg:w-[389px] lg:h-[240px] rounded-3xl object-cover" />
                </div>
            </div>
        </div>
    );
};

export default OuterWrapper(Main, 'relative');

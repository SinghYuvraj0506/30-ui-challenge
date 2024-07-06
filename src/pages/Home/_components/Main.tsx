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

const Main = () => {
    return (
        <div className="w-full h-max py-32 mb-64">
            <div className="flex items-start justify-center relative w-full">
                <div className={clsx(config.others.tag01, config.typography.head24Normal, 'text-primary absolute bottom-8 left-14 -rotate-[12deg]')}>
                    <img src={icon1} alt="" />
                    Safe & Secure
                </div>
                <section className="flex flex-col gap-8 items-center justify-center z-20 relative">
                    <div>
                        <h1 className={clsx(config.typography.head64)}>
                            Join the 30-Days
                            <br /> UI Design Challenge!
                        </h1>
                    </div>

                    <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                        Unlock Your Creative Potential with 30 Days of UI Challenges and Inspirational Insights.
                    </span>

                    <div className="mt-8">
                        <EmailForm />
                    </div>
                </section>

                <div className={clsx(config.others.tag01, config.typography.head24Normal, 'text-primary absolute right-5 top-0 rotate-[11deg]')}>
                    <img src={icon2} alt="" />
                    100% Free
                </div>
            </div>

            <div
                className="absolute -bottom-72 left-0 w-full h-[350px] z-10 flex items-center justify-center"
                style={{ background: 'linear-gradient(rgb(255, 255, 255) 5%, rgb(215, 212, 241) 56.21%)' }}
            >
                <div className="flex items-center gap-4 w-full overflow-x-hidden">
                    <img src={image1} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                    <img src={image2} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                    <img src={image3} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                    <img src={image4} alt="" className="w-[389px] h-[250px] rounded-3xl object-cover" />
                </div>
            </div>
        </div>
    );
};

export default OuterWrapper(Main, 'relative');

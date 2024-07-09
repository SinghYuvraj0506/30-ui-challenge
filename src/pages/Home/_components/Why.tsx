import React, { ReactNode } from 'react';
import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import { featuresContent } from '../../../libs/constants';

import curve1 from '../../../assets/svg/curve2.svg';

type FeatureCardProps = {
    icon: string;
    head: string;
    desc: string;
};

const FeatureCard = ({ icon, head, desc }: FeatureCardProps) => {
    return (
        <div className="bg-white p-10 lg:p-8 rounded-3xl flex flex-col gap-3 lg:gap-4" style={{ boxShadow: '0px 4px 34px 0px rgba(18, 18, 18, 0.06)' }}>
            <span className="p-5 lg:p-6 rounded-2xl bg-secondary w-max h-max">
                <img src={icon} alt="" />
            </span>
            <h3 className={clsx(config.typography.head24, 'mt-4')}>{head}</h3>
            <p className={clsx(config.typography.text16, 'text-textBlack02')}>{desc}</p>
        </div>
    );
};

const Why = () => {
    return (
        <div className="flex flex-col gap-[64px]  sm:gap-[80px]  lg:gap-[120px] py-20 sm:py-28 lg:py-40" id="about">
            <section className="flex items-center flex-col justify-center gap-6">
                <div>
                    <h1 className={clsx(config.typography.head48, 'text-center')}>
                        Why should you join this
                        <br />
                    </h1>
                    <h1 className={clsx(config.typography.head48, 'text-center relative')}>
                        <span className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-3">
                            <img src={curve1} alt="" className="w-[141px] sm:w-[158px] lg:w-[246px]" />
                        </span>
                        challenge?
                    </h1>
                </div>

                <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                    Our 30-Day UI Design Challenge is perfect for beginners <br />
                    looking to improve their skills.
                </span>
            </section>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuresContent?.map((feature) => (
                    <FeatureCard {...feature} />
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(Why);

import React from 'react';
import OuterWrapper from './HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../libs/config';
import EmailForm from './forms/EmailForm';
import { Logo } from './Logo';
import { navLinks, otherWebsiteLinks, socialLinks } from '../libs/constants';

const Footer = () => {
    return (
        <div className="flex flex-col gap-[120px] py-[100px]">
            <div className="w-full bg-secondary py-20 flex flex-col text-center items-center justify-center gap-6 rounded-[40px]">
                <h1 className={clsx(config.typography.head48)}>Ready to Start Your UI Journey?</h1>

                <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                    Join our 30-Day UI Design Challenge today!
                </span>

                <div className="mt-6">
                    <EmailForm />
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <section className="w-full flex items-center justify-between border-b-[1px] border-b-[#08071433] pb-5">
                    <Logo />

                    <div className={clsx('flex items-center gap-12 text-textBlack01', config.typography.text16)}>
                        {navLinks?.map((nav) => (
                            <a href={nav?.link} key={nav?.name}>
                                {nav?.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        {socialLinks?.map((nav, index) => (
                            <a href={nav?.link} key={index} target="_blank">
                               <img src={nav?.icon} alt="" />
                            </a>
                        ))}
                    </div>
                </section>

                <section className={clsx('flex items-center gap-6 pt-8 text-textBlack02')}>
                    {otherWebsiteLinks?.map((nav, index) => (
                        <a href={nav?.link} key={index} target="_blank" className={clsx(config.typography.text16,{"hover:underline": nav.link})}>
                            {nav?.name}
                        </a>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default OuterWrapper(Footer);

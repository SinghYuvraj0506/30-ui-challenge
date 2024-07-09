import OuterWrapper from './HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../libs/config';
import EmailForm from './forms/EmailForm';
import { Logo } from './Logo';
import { navLinks, otherWebsiteLinks, socialLinks } from '../libs/constants';

const Footer = () => {
    return (
        <div className="flex flex-col gap-[120px] py-[60px] sm:py-[100px]">
            <div className="w-full bg-secondary py-16 sm:py-20 flex flex-col text-center items-center justify-center gap-4 sm:gap-6 rounded-[40px]">
                <h1 className={clsx(config.typography.head48)}>
                    Ready to Start Your
                    <br /> UI Journey?
                </h1>

                <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                    Join our 30-Day UI Design Challenge today!
                </span>

                <div className="mt-6 w-[82%] sm:w-auto">
                    <EmailForm />
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <section className="w-full flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-unset border-b-[1px] border-b-[#08071433] pb-5">
                    <Logo />

                    <div
                        className={clsx(
                            'flex items-center flex-col sm:flex-row gap-8  sm:gap-12 text-textBlack01',
                            config.typography.text16
                        )}
                    >
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

                <section className={clsx('flex items-center flex-col sm:flex-row gap-7 pt-8 text-textBlack02')}>
                    <span className={clsx(config.typography.text16,"text-nowrap")}>All right reserved</span>

                    <div className="flex items-center justify-center gap-5 w-[80%] flex-wrap">
                        {otherWebsiteLinks?.map((nav, index) => (
                            <a href={nav?.link} key={index} target="_blank" className={clsx(config.typography.text16, 'underline')}>
                                {nav?.name}
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OuterWrapper(Footer);

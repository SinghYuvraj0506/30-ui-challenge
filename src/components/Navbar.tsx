import clsx from 'clsx';
import { navLinks } from '../libs/constants';
import { Logo } from './Logo';
import config from '../libs/config';
import menu from '../assets/svg/menu.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {

    const tl = gsap.timeline({ paused: true });

    useGSAP(() => {
        tl.to('#ham_mobile_options', {
            duration: 1,
            opacity: 1,
            height: '40vh', // change this to 100vh for full-height menu
            ease: 'expo.inOut'
        });
        tl.from(
            '#ham_mobile_options a',
            {
                duration: 1,
                opacity: 0,
                y: 20,
                stagger: 0.1,
                ease: 'expo.inOut'
            },
            '-=0.5'
        );
        tl.reverse();
    },{});

    const handleHamClick = () => {
        // setOpenMenu(!openMenu)
        tl.reversed(!tl.reversed());
    };

    return (
        <div className="bg-white flex flex-col px-[4vw] sm:px-[8vw] w-full border-b-[1px] border-b-[#08071433] sticky top-0 z-[999]">
            <div
                className="w-full h-full flex items-center justify-between sm:relative sm:py-0 py-4 "
                id="nav-container"
            >
                <div>
                    <Logo />
                </div>

                {window.screen.width > 630 ? (
                    <div className={clsx('flex items-center gap-16 lg:gap-12 text-textBlack01', config.typography.text16)}>
                        {navLinks?.map((nav) => (
                            <a href={nav?.link} key={nav?.name}>
                                {nav?.name}
                            </a>
                        ))}
                    </div>
                ) : (
                    <img src={menu} alt="menu" onClick={()=>{handleHamClick()}} />
                )}
            </div>
            <div
                className={clsx(
                    'absolute top-[101%] py-16 left-0 z-50 bg-white w-full flex flex-col items-center justify-center gap-8 opacity-0 h-0',
                    config.typography.text20
                )}
                id="ham_mobile_options"
            >
                {navLinks?.map((nav) => (
                    <a href={nav?.link} key={nav?.name} onClick={()=>{handleHamClick()}}>
                        {nav?.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;

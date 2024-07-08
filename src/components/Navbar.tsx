import clsx from 'clsx';
import { navLinks } from '../libs/constants';
import { Logo } from './Logo';
import config from '../libs/config';
import OuterWrapper from './HOC/OuterWrapper';

const Navbar = () => {

    return (
        <div className="w-full h-full flex items-center justify-between lg:justify-center relative py-7 lg:py-8" id="nav-container">
            <div className="relative lg:absolute left-0 w-12 h-12">
                <Logo />
            </div>

            <div className={clsx("flex items-center gap-16 lg:gap-20 text-textBlack01",config.typography.text16)}>
                {navLinks?.map((nav) => (
                    <a href={nav?.link} key={nav?.name}>{nav?.name}</a>
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(Navbar,"border-b-[1px] border-b-[#08071433]");

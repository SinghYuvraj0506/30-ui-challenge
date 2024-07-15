import clsx from 'clsx';
import DialogWrapper from '../HOC/DialogWrapper';
import config from '../../libs/config';
import { socialLinks, successDialogContent } from '../../libs/constants';
import icon1 from '../../assets/svg/arrowLeft.svg';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

type CardProps = {
    icon: string;
    content: string;
};

type SuccessProps = {
    onClose: () => void;
};

const Card = ({ icon, content }: CardProps) => {
    return (
        <div
            className="bg-white w-[187px] h-[204px] box-border p-10 lg:p-5 rounded-3xl flex items-center flex-col gap-5"
            style={{ boxShadow: '0px 4px 34px 0px rgba(18, 18, 18, 0.06)' }}
        >
            <span className="p-5 rounded-2xl bg-secondary w-max h-max">
                <img src={icon} alt="" className="w-6" />
            </span>
            <p className={clsx(config.typography.text16, 'text-textBlack02')}>{content}</p>
        </div>
    );
};

const Success: React.FC<SuccessProps> = ({ onClose }) => {


    return (
        <div className="flex flex-col items-center justify-center text-center w-[80vw] py-14 bg-white rounded-md gap-16 relative" id="modal-success">
            <div
                className={clsx(
                    'absolute left-10 top-10 text-textBlack02 cursor-pointer hover:scale-105 transition-all flex items-center gap-1',
                    config.typography.text16
                )}
                onClick={onClose}
            >
                <img src={icon1} alt="" className="h-5" />
                back
            </div>

            <section className="flex items-center justify-center gap-4 flex-col w-full">
                <h1 className={clsx(config.typography.head48, 'text-primary')}>Welcome to Challenge!</h1>
                <span className={clsx(config.typography.head24Normal, 'text-textBlack02')}>
                    Thank You! for Joining the 30-Day UI Design Challenge!
                </span>
            </section>

            <section className="flex items-center justify-center gap-8 flex-col w-full">
                <h3 className={clsx(config.typography.head24, 'text-[#100C1A]')}>What to Do Next</h3>

                <div className="flex items-center justify-center gap-4">
                    {successDialogContent?.map((e) => (
                        <Card {...e} />
                    ))}
                </div>

                <span>
                    Don’t forget to use <span className="text-primary">#30dayuibuddy</span> while uploading your design on social media
                </span>
            </section>

            <section className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-5">
                    {socialLinks?.map((nav, index) => (
                        <a href={nav?.link} key={index} target="_blank">
                            <img src={nav?.icon} alt="" />
                        </a>
                    ))}
                </div>

                <span className={clsx(config.typography.text16, 'text-textBlack02')}>Follow us on social media!</span>
            </section>
        </div>
    );
};

export default DialogWrapper(Success);

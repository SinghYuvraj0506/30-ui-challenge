import clsx from 'clsx';
import DialogWrapper from '../HOC/DialogWrapper';
import config from '../../libs/config';
import img1 from '../../assets/images/herosection/6.webp';
import { CloseCircle } from 'iconsax-react';

type AlreadyProps = {
    onClose: () => void;
};

const Already: React.FC<AlreadyProps> = ({ onClose }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center w-[85vw] sm:w-[42vw] py-14 bg-white gap-16 relative rounded-[24px]" id="modal-success">
            <div
                className={clsx(
                    'absolute right-6 top-6 text-textBlack02 cursor-pointer hover:scale-105 transition-all flex items-center gap-1',
                    config.typography.text16
                )}
                onClick={onClose}
            >
                <CloseCircle size="24" color="#080714"/>
            </div>


            <div className='flex flex-col items-center gap-4'>
                <img src={img1} alt="" className='h-[181px] w-auto object-contain'/>

                <div className='flex flex-col gap-4 items-center'>
                    <h1 className={clsx(config.typography.head24, 'text-black text-nowrap')}>You're Already Subscribed!</h1>
                    <p className={clsx(config.typography.text16, 'text-[#080714] opacity-40')}>Thank you for being a part of our 30-Day UI Design Challenge community. You’ll continue receiving daily challenges and updates directly in your inbox!</p>

                    <button className={clsx(config.forms.button01, config.typography.text16,'mt-6 text-white')}>Go to Your Inbox</button>
                </div>

            </div>

            

        </div>
    );
};

export default DialogWrapper(Already);

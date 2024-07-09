
import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import { howItWorksContent } from '../../../libs/constants';

import curve1 from '../../../assets/svg/curve3.svg';

type CardProps = {
    id: string;
    title: string;
    image: string;
    desc: string;
    points?: {
        head: string;
        desc: string;
    }[];
};

const Card = ({ id, title, image, desc, points }: CardProps) => {
    return (
        <div className="w-full flex items-center flex-col sm:flex-row gap-4 ">
            <div className="w-[80%] sm:w-1/2">
                <img src={image} alt="" className="w-full object-contain" />
            </div>

            <div className="flex flex-col gap-2 w-[80%] sm:w-1/2">
                <span className={clsx(config.typography.head48, 'text-textgrey01')}>{id}</span>
                <h2 className={clsx(config.typography.head32)}>{title}</h2>
                <p className={clsx(config.typography.text16, 'text-textBlack02 mt-2 sm:mt-3 lg:mt-5')}>{desc}</p>

                <ul className="flex flex-col gap-4 sm:gap-5 ml-2 mt-6 list-disc">
                    {points?.map((point) => (
                        <li>
                            <h5 className={clsx(config.typography.head24, 'text-textBlack01')}>{point?.head}</h5>
                            <span className={clsx(config.typography.text14, 'text-textBlack02')}>{point?.desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const How = () => {
    return (
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-[120px] py-20 sm:py-28 lg:py-40" id="how">
            <section className="flex items-center flex-col justify-center gap-4 sm:gap-5 lg:gap-6">
                <div>
                    <h1 className={clsx(config.typography.head48,"relative")}>
                        How it work's?{' '}
                        <span className="absolute -right-6 -top-2 sm:-right-8 sm:-top-4 lg:-right-12 lg:-top-6">
                            <img src={curve1} alt="" className="w-[23px] sm:w-[34px] lg:w-[52px]" />
                        </span>
                    </h1>
                </div>

                <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                    Follow these steps to start improving your design skills, sharing your work, and potentially getting featured
                </span>
            </section>

            <div className="w-full flex flex-col items-start gap-[80px] lg:gap-[100px]">
                {howItWorksContent?.map((data) => (
                    <Card key={data?.id} {...data} />
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(How);

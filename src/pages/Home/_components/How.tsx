import React, { ReactNode } from 'react';
import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import { howItWorksContent } from '../../../libs/constants';

type CardProps = {
    id: string;
    title: string;
    image: string;
    desc: string;
    points?:{
        head:string,
        desc:string
    }[]
};

const Card = ({ id, title, image, desc, points }: CardProps) => {
    return (
       <div className='w-full flex items-center gap-4 '>
            <div className='w-1/2'>
                <img src={image} alt="" className='w-full object-contain'/>
            </div>


            <div className='flex flex-col gap-2'>
                <span className={clsx(config.typography.head48,"text-textgrey01")}>{id}</span>
                <h2 className={clsx(config.typography.head32)}>{title}</h2>
                <p className={clsx(config.typography.text16,"text-textBlack02 mt-5")}>{desc}</p>

                <ul className='flex flex-col gap-5 ml-2 mt-6 list-disc'>
                    {points?.map((point)=>(
                    <li>
                        <h5 className={clsx(config.typography.head24, "text-textBlack01")}>{point?.head}</h5>
                        <span className={clsx(config.typography.text14, "text-textBlack02")}>{point?.desc}</span>
                    </li>
                    ))}
                </ul>
            </div>

       </div>
    );
};

const How = () => {
    return (
        <div className="flex flex-col gap-[200px] py-40" id="how">
            <section className="flex items-center flex-col justify-center gap-6">
                <div>
                    <h1 className={clsx(config.typography.head48)}>How it work's?</h1>
                </div>

                <span className={clsx(config.typography.text16, 'text-textBlack02 text-center')}>
                    Follow these steps to start improving your design skills, sharing your work, and potentially getting featured
                </span>
            </section>

            <div className="w-full flex flex-col items-start gap-[100px]">
                {howItWorksContent?.map((data) => (
                    <Card key={data?.id} {...data} />
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(How);

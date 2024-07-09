import clsx from 'clsx';
import config from '../../../libs/config';
import { testimonialContent } from '../../../libs/constants';
import OuterWrapper from '../../../components/HOC/OuterWrapper';

import curve1 from '../../../assets/svg/curve4.svg';

type CardProps = {
    username: string;
    designation: string;
    image: string;
    testimonial: string;
};

const TestimonialCard = ({ username, designation, image, testimonial }: CardProps) => {
    return <div className='sm:w-[304px] lg:w-full p-8 box-border rounded-3xl flex flex-col gap-12' style={{boxShadow:"0px 4px 34px 0px rgba(18, 18, 18, 0.06)"}}>

        <div className='flex items-center gap-4'>
            <img src={image} alt="profile" className='w-16 h-16 rounded-2xl object-cover'/>

            <section className='flex flex-col gap-2 items-start'>
                <span className={clsx(config.typography.head24Normal,"text-textBlack01")}>{username}</span>
                <span className={clsx(config.typography.text16,"text-textBlack02")}>{designation}</span>
            </section>
        </div>

        <p className={clsx(config.typography.text16,"text-textBlack02")}>
            {testimonial}
        </p>

    </div>;
};

const Testimonial = () => {
    return (
        <div className="w-full flex flex-col items-center gap-16 sm:gap-[80px] lg:gap-[120px] py-20 sm:py-28 lg:py-40">
            <div className='flex flex-col items-center'>
                <h1 className={clsx(config.typography.head48, 'text-center')}>
                    And See What the Design
                </h1>
                <h1 className={clsx(config.typography.head48, 'text-center relative')}>
                    Community is Saying
                    <span className="absolute -right-3 -bottom-2  sm:-right-2 sm:-bottom-2  lg:-right-4 lg:-bottom-3 ">
                            <img src={curve1} alt="" className="w-[99px] sm:w-[115px] lg:w-[174px]" />
                        </span>
                </h1>
            </div>

            <div className="w-full flex items-center justify-center flex-wrap lg:grid lg:grid-cols-3 gap-4">
                {testimonialContent?.map((data) => (
                    <TestimonialCard {...data} />
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(Testimonial);

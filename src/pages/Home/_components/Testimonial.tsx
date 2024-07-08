import clsx from 'clsx';
import config from '../../../libs/config';
import { testimonialContent } from '../../../libs/constants';
import OuterWrapper from '../../../components/HOC/OuterWrapper';

type CardProps = {
    username: string;
    designation: string;
    image: string;
    testimonial: string;
};

const TestimonialCard = ({ username, designation, image, testimonial }: CardProps) => {
    return <div className='w-full p-8 box-border rounded-3xl flex flex-col gap-12' style={{boxShadow:"0px 4px 34px 0px rgba(18, 18, 18, 0.06)"}}>

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
        <div className="w-full flex flex-col items-center gap-[158px] py-40 ">
            <div>
                <h1 className={clsx(config.typography.head48, 'text-center')}>
                    And See What the Design <br />
                    Community is Saying
                </h1>
            </div>

            <div className="w-full grid grid-cols-2 place-items-center lg:grid-cols-3 gap-4">
                {testimonialContent?.map((data) => (
                    <TestimonialCard {...data} />
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(Testimonial);

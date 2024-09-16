import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import { communityContent } from '../../../libs/constants';

const Community = () => {
    return (
        <div className="w-full flex flex-col items-center gap-16 sm:gap-20 lg:gap-[100px] py-20 sm:py-28 lg:py-40">
            <h1 className={clsx(config.typography.head48,"text-center")}>Join a Global <br/> <span className='text-primary'>Community</span> of Top <br/> Designers</h1>

            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
                {communityContent?.map((e) => (
                    <span className='bg-white rounded-xl lg:rounded-3xl w-full flex items-center justify-center py-6 sm:py-8'>
                        <img src={e?.image} alt="" className=' h-8 sm:h-12 w-32 lg:h-16 object-contain'/>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(Community, 'bg-secondary');

import OuterWrapper from '../../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../../libs/config';
import { communityContent } from '../../../libs/constants';

const Community = () => {
    return (
        <div className="w-full flex flex-col items-center gap-[100px] py-40">
            <h1 className={clsx(config.typography.head48,"text-center")}>Join a Global <br/> <span className='text-primary'>Community</span> of Top <br/> Designers</h1>

            <div className="w-full grid grid-cols-3 gap-4">
                {communityContent?.map(() => (
                    <span className='bg-white rounded-3xl w-full flex items-center justify-center py-5'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx2eQMLqekkgeCVgxe6SWgby3nkP-CDCrDA&s" alt="" className='h-16 object-cover'/>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default OuterWrapper(Community, 'bg-secondary');

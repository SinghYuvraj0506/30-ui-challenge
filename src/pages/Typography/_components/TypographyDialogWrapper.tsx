import { useEffect, useRef, useState } from 'react';
import DialogWrapper from '../../../components/HOC/DialogWrapper';
import { CloseCircle, DocumentDownload } from 'iconsax-react';
import config from '../../../libs/config';
import clsx from 'clsx';
import { TypographyData } from '../../../libs/constants';
import TypographyCard from './TypographyCard';

type Props = {
    onClose: () => void;
    data: (typeof TypographyData)[0];
    setModalData: (e: (typeof TypographyData)[0]) => void;
};

const TypographyDialogWrapper = ({ onClose, data, setModalData }: Props) => {
    const [similarData, setSimilarData] = useState<typeof TypographyData>([]);
    const containerRef=  useRef<HTMLDivElement>(null)

    useEffect(() => {
        const data2 = TypographyData?.filter((e) => e.style === data?.style && e?.id !== data?.id);
        setSimilarData(data2);

        containerRef.current?.scrollTo(0,0);

    }, [data]);    
    

    return (
        <div className="w-[84vw] bg-white rounded-3xl flex flex-col gap-10 p-12 box-border h-[70vh] overflow-auto no-scrollbar" ref={containerRef}>
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className={clsx(config.typography.head48, 'text-textBlack01 font-normal')}>{data?.title}</h2>
                    <span className={clsx(config.typography.text16, 'text-textBlack01 font-normal opacity-40')}>{data?.style} font</span>
                </div>

                <CloseCircle size="32" color="#080714" className="cursor-pointer" onClick={onClose} />
            </div>

            <div className="flex w-[80%] flex-col gap-10 items-center justify-center mx-auto">
                <img src={data?.imgSrc} alt="" className="w-full aspect-video object-fill rounded-[24px]" />
                <p className={clsx(config.typography.text16, 'text-textBlack01 max-w-full font-normal opacity-60')}>{data?.desc}</p>
            </div>

            <div className="flex items-center justify-between mt-16">
                <div className="flex items-start gap-20">
                    <div className={clsx(config.typography.text16, 'text-[#080714CC] font-normal flex flex-col gap-2')}>
                        <span>License</span>
                        <span>Font type</span>
                        <span>Format</span>
                    </div>
                    <div className={clsx(config.typography.text16, 'text-[#08071499] font-normal flex flex-col gap-2')}>
                        <span>Free for personal use</span>
                        <span>{data?.style}</span>
                        <span>{data?.format?.join(', ')}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className={clsx(config.typography.text16, 'flex items-center gap-2 rounded-[50px] bg-primary py-3 px-6 text-white')}
                    >
                        <DocumentDownload size="24" color="#FFFFFF" /> Download Font
                    </button>
                </div>
            </div>

            {similarData?.length > 0 && (
                <div className="flex flex-col gap-8 mt-20">
                    <h3 className={clsx(config.typography.head24Normal, 'text-textBlack01')}>Similar fonts</h3>

                    <div className="grid grid-cols-3 gap-5">
                        {similarData?.map((e, index) => {
                            return <TypographyCard key={`${e?.title}-${index}`} {...e} openModal={()=>{setModalData(e)}} />;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DialogWrapper(TypographyDialogWrapper);

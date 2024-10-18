import { useRef} from 'react';
import DialogWrapper from '../../../components/HOC/DialogWrapper';
import { CloseCircle, DocumentDownload } from 'iconsax-react';
import config from '../../../libs/config';
import clsx from 'clsx';
import { TypographyData } from '../../../libs/constants';
import TypographyCard from './TypographyCard';
import useFetchTypography from '../../../hooks/useFetchTypography';
import Loader from '../../../components/Loader';

type Props = {
    onClose: () => void;
    data: TypographyData;
    setModalData: (e: TypographyData) => void;
};

const TypographyDialogWrapper = ({ onClose, data, setModalData }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { data: similarData, loading } = useFetchTypography({
        page: 1,
        style: data?.fontType?.split('font')[0],
        limit: 10,
        infiniteScroll: false
    });

    return (
        <div
            className="w-[95vw] sm:w-[84vw] bg-white rounded-3xl flex flex-col gap-10 p-6 sm:p-12 box-border h-[80vh] sm:h-[70vh] overflow-auto no-scrollbar"
            ref={containerRef}
        >
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className={clsx(config.typography.head48, 'text-textBlack01 font-normal')}>{data?.fontName}</h2>
                    <span className={clsx(config.typography.text16, 'text-textBlack01 font-normal opacity-40')}>
                        {data?.fontType?.toLowerCase()?.replace(/^\w/, (c) => c.toUpperCase())}
                    </span>
                </div>

                <CloseCircle size="32" color="#080714" className="cursor-pointer" onClick={onClose} />
            </div>

            <div className="flex w-full sm:w-[80%] flex-col gap-10 items-center justify-center mx-auto">
                <img src={data?.imgSrc} alt="" className="w-full aspect-video object-fill rounded-[24px]" />
                <p className={clsx(config.typography.text16, 'text-textBlack01 max-w-full font-normal opacity-60')}>{data?.desc}</p>
            </div>

            <div className="flex items-center justify-between mt-8 sm:mt-16">
                <div className="flex items-start gap-3 sm:gap-20 w-full">
                    <div className={clsx(config.typography.text16, 'text-[#080714CC] font-normal flex flex-col gap-2')}>
                        <span>License</span>
                        <span>Font type</span>
                        <span>Format</span>
                    </div>
                    <div className={clsx(config.typography.text16, 'text-[#08071499] font-normal flex flex-col gap-2')}>
                        <span>Free for personal use</span>
                        <span>{data?.fontType?.toLowerCase()?.replace(/^\w/, (c) => c.toUpperCase())} </span>
                        <span>{data?.format}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className={clsx(config.typography.text16, 'flex items-center text-nowrap gap-2 rounded-[50px] bg-primary py-2 px-4 sm:py-3 sm:px-6 text-white')}
                        onClick={() => {
                            window.open(data?.srcLink);
                        }}
                    >
                        <DocumentDownload size="24" color="#FFFFFF" /> Download Font
                    </button>
                </div>
            </div>

            {similarData?.filter((e) => e?._id !== data?._id)?.length > 0 && (
                <div className="flex flex-col gap-8 mt-10 sm:mt-20">
                    <h3 className={clsx(config.typography.head24Normal, 'text-textBlack01 font-bold')}>Similar fonts</h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                        {similarData
                            ?.filter((e) => e?._id !== data?._id)
                            ?.map((e, index) => {
                                return (
                                    <TypographyCard
                                        key={`${e?.fontName}-${index}`}
                                        {...e}
                                        openModal={() => {
                                            setModalData(e);
                                        }}
                                    />
                                );
                            })}
                    </div>
                </div>
            )}

            {loading && <Loader />}
        </div>
    );
};

export default DialogWrapper(TypographyDialogWrapper);

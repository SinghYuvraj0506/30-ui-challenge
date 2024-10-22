import { useEffect, useRef} from 'react';
import { CloseCircle, Copy, DocumentDownload } from 'iconsax-react';
import config from '../../../libs/config';
import clsx from 'clsx';
import { toBlob, toPng } from 'html-to-image';
import toast from 'react-hot-toast';
import DialogWrapper from '../../../components/HOC/DialogWrapper';
import ColorCard from './ColorCard';
import { ColorData } from '../../../libs/constants';
import useFetchColorPallete from '../../../hooks/useFetchColorPallate';
import Loader from '../../../components/Loader';

type Props = {
    onClose: () => void;
    colorData: ColorData | null;
};

const PaletteWrapper = ({ onClose, colorData }: Props) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const { data: similarData , loading } = useFetchColorPallete({ page:1, type: colorData?.type as string, limit:10, infiniteScroll: false });

    const getImage = async () => {
        if (contentRef.current) {
            const dataUrl = await toPng(contentRef.current);
            return dataUrl;
        }
    };

    const downloadImage = async () => {
        try {
            const dataUrl = await getImage();
            const link = document.createElement('a');
            link.download = 'color-palette.png';
            link.href = dataUrl as string;
            link.click();
        } catch (error) {
            toast.error('Some error occured');
        }
    };

    const copyImage = async () => {
        try {
            let blob;

            if (contentRef.current) {
                const dataUrl = await toBlob(contentRef.current);
                blob = dataUrl;
            }

            if (blob) {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'image/png': blob
                    })
                ]);
            }
            toast.success('Copied Image successfully');
        } catch (error) {
            console.log(error);
            toast.error('Some error occured');
        }
    };


    useEffect(() => {
        contentRef?.current?.scrollTo(0,0)
      
    }, [colorData])

    return (
        <div className="w-[95vw] sm:w-[84vw] bg-white rounded-3xl flex flex-col gap-10 p-6 sm:p-12 box-border h-[80vh] sm:h-[70vh] overflow-auto no-scrollbar" >
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className={clsx(config.typography.head48, 'text-textBlack01 font-normal')}>Palette</h2>
                    <span className={clsx(config.typography.text16, 'text-textBlack01 font-normal opacity-40')}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </span>
                </div>

                <CloseCircle size="32" color="#080714" className="cursor-pointer" onClick={onClose} />
            </div>

            <div className="flex w-full min-h-[220px] rounded-xl overflow-hidden" ref={contentRef}>
                {colorData?.colorCodes?.map((e) => (
                    <div style={{ backgroundColor: e }} className="flex-1 w-full h-full flex items-center justify-center">
                        <span className={clsx(config.typography.text14, 'text-textBlack01 font-normal opacity-80')}>{e}</span>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between flex-row-reverse">
                <div className="flex items-center justify-between w-full sm:gap-4">
                    <button
                        className={clsx(
                            config.typography.text16,
                            'flex items-center gap-2 rounded-[50px] bg-white border border-[#0807141F] py-3 px-6'
                        )}
                        onClick={copyImage}
                    >
                        {' '}
                        <Copy size="24" color="#6A6A72" /> Copy
                    </button>
                    <button
                        className={clsx(config.typography.text16, 'flex items-center gap-2 rounded-[50px] bg-primary py-3 px-6 text-white')}
                        onClick={downloadImage}
                    >
                        <DocumentDownload size="24" color="#FFFFFF" /> Download Image
                    </button>
                </div>
            </div>

            {similarData?.filter((e)=>e?._id !== colorData?._id)?.length > 0 && (<div className="flex flex-col gap-8 mt-20">
                <h3 className={clsx(config.typography.head24Normal, 'text-textBlack01 font-bold')}>Similar palettes</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {similarData?.filter((e)=>e?._id !== colorData?._id)?.map((e, index) => (
                        <ColorCard colorThemes={e?.colorCodes} type={e?.type} key={`palatecolrocard${index}`} />
                    ))}
                </div>
            </div>)}

            {loading && <Loader/>}
        </div>
    );
};

export default DialogWrapper(PaletteWrapper);

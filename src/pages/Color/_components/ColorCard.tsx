import clsx from 'clsx';
import { Copy, DocumentDownload } from 'iconsax-react';
import config from '../../../libs/config';
import toast from 'react-hot-toast';
import { toBlob, toPng } from 'html-to-image';
import { useRef } from 'react';

type Props = {
  colorThemes: string[],
  handleSelect?: () => void
  type:string
}

const ColorCard = ({colorThemes, handleSelect,type}:Props) => {
    const contentRef = useRef<HTMLDivElement>(null);

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

            if(blob){
                await navigator.clipboard.write([
                    new ClipboardItem({
                      'image/png': blob
                    }),
                  ]);      
            }
            toast.success('Copied Image successfully');
        } catch (error) {
            console.log(error)
            toast.error('Some error occured');
        }
    };


    return (
        <div className="flex w-full flex-col gap-3 cursor-pointer" onClick={handleSelect}>
            <div className="w-full grid grid-cols-4 h-[150px] sm:h-[210px] rounded-xl overflow-hidden shadow-xl" ref={contentRef}>
                {colorThemes?.map((e) => (
                    <div key={e} className={clsx(`bg-white`, 'flex-1 h-full flex flex-col items-center box-border')}>
                        <span className={clsx('py-4 opacity-80 text-textBlack01', config.typography.text12)}>{e}</span>
                        <div style={{ backgroundColor: `${e}` }} className="flex-1 w-full">
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center w-full justify-between">
                <div className="flex flex-col">
                    <h6 className={clsx(config.typography.text16, 'text-[#000000]')}>{type}</h6>
                </div>

                <div className='flex items-center gap-4'>
                <Copy size="24" color="#6A6A72" onClick={(e)=>{copyImage(); e?.stopPropagation()}}/>
                <DocumentDownload size="24" color="#6A6A72" onClick={(e)=>{downloadImage(); e?.stopPropagation()}}/>
                </div>
            </div>
        </div>
    );
};

export default ColorCard;

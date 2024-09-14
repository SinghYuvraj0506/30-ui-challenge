import clsx from 'clsx';
import { ExportSquare } from 'iconsax-react';
import config from '../../../libs/config';

type Props = {
    title: string;
    style: string;
    industry: string[];
    imgSrc: string;
    format: string[];
    downloadLinK: string;
    desc?: string;
    openModal?: () => void;
};

const TypographyCard = ({ title, style, industry, imgSrc, format, downloadLinK, desc, openModal }: Props) => {
    return (
        <div
            className="flex w-full flex-col gap-3 cursor-pointer"
            onClick={() => {
                openModal && openModal();
            }}
        >
            <img src={imgSrc} alt="" className="rounded-xl w-full aspect-video object-fill" />

            <div className="flex items-center w-full justify-between">
                <div className="flex flex-col">
                    <h6 className={clsx(config.typography.text16, 'text-[#000000]')}>{title}</h6>
                    <span className={clsx(config.typography.text14, 'text-[#6A6A72]')}>{style} font</span>
                </div>

                <ExportSquare size="24" color="#6A6A72" />
            </div>
        </div>
    );
};

export default TypographyCard;

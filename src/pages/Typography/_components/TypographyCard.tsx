import clsx from 'clsx';
import { ExportSquare } from 'iconsax-react';
import config from '../../../libs/config';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
    fontName: string;
    fontType: string;
    imgSrc: string;
    format: string;
    openModal?: () => void;
};

const TypographyCard = ({ fontName, fontType, imgSrc, openModal }: Props) => {
    return (
        <div
            className="flex w-full flex-col gap-3 cursor-pointer"
            onClick={() => {
                openModal && openModal();
            }}
        >
            <LazyLoadImage src={imgSrc} className="rounded-xl w-full aspect-video object-fill" alt="" 
            effect="blur"
            wrapperProps={{
                style: {transitionDelay: "0.5s"},
            }}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src="https://i.sstatic.net/y9DpT.jpg";
              }}
            />

            <div className="flex items-center w-full justify-between">
                <div className="flex flex-col">
                    <h6 className={clsx(config.typography.text16, 'text-[#000000]')}>{fontName}</h6>
                    <span className={clsx(config.typography.text14, 'text-[#6A6A72]')}>
                        {fontType?.toLowerCase()?.replace(/^\w/, (c) => c.toUpperCase())}{' '}
                    </span>
                </div>

                <ExportSquare size="24" color="#6A6A72" />
            </div>
        </div>
    );
};

export default TypographyCard;

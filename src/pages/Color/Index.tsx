import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import config from '../../libs/config';
import { ColorData, ColorTags } from '../../libs/constants';
import ColorCard from './_components/ColorCard';
import OuterWrapper from '../../components/HOC/OuterWrapper';
import PaletteWrapper from './_components/PaletteWrapper';

const Color = () => {
    const [SelectedTag, setSelectedTag] = useState('All');
    const [filteredData, setFilteredData] = useState<typeof ColorData>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<typeof ColorData[0]>();


    useEffect(() => {
        setFilteredData([]);
        let arr: typeof ColorData = [];
        if (SelectedTag === 'All') {
            arr = [...ColorData];
        } else {
            arr = ColorData?.filter((e) => e?.type === SelectedTag);
        }
        setFilteredData(arr);
    }, [SelectedTag]);


    return (
        <>
            {modalOpen && <PaletteWrapper onClose={() => setModalOpen(false)} colorData={selectedTheme || null} />}
            <div className="py-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className={clsx(config.typography.head48, 'font-normal')}>Color Palette</h2>
                    <span className={clsx(config.typography.text16, 'text-textBlack01 opacity-40')}>
                        Choose your best Color that suit your design language
                    </span>
                </div>

                <div className="flex items-center gap-4 w-full overflow-x-auto no-scrollbar">
                    {ColorTags?.map((e) => (
                        <span
                            className={clsx(
                                'py-4 w-max text-nowrap px-8 border rounded-[50px] cursor-pointer',
                                SelectedTag === e
                                    ? 'bg-[#5F51F11A] border-transparent text-[#5F51F1]'
                                    : 'bg-transparent border-[#0807141F]',
                                config.typography.text16
                            )}
                            onClick={() => {
                                setSelectedTag(e);
                            }}
                        >
                            {e}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-5">
                    {filteredData?.map((e,index)=>(
                        <ColorCard
                            colorThemes={e?.colorCodes}
                            handleSelect={() => {
                                setModalOpen(true);
                                setSelectedTheme(e);
                            }}
                            type={e?.type}
                            key={`colorcard${index}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OuterWrapper(Color);

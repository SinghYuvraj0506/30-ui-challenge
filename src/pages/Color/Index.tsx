import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import config from '../../libs/config';
import { ColorData, ColorTags } from '../../libs/constants';
import ColorCard from './_components/ColorCard';
import OuterWrapper from '../../components/HOC/OuterWrapper';
import PaletteWrapper from './_components/PaletteWrapper';
import useFetchColorPallete from '../../hooks/useFetchColorPallate';
import Loader from '../../components/Loader';

const Color = () => {
    const [SelectedTag, setSelectedTag] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<ColorData>();
    const [page, setPage] = useState(1);

    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        setData([]);
        setPage(1);
    }, [SelectedTag]);

    const { data: filteredData, loading, error, hasMore, setData } = useFetchColorPallete({ page, type: SelectedTag });

    const lastObserverRef = useCallback(
        (node: Element) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    console.log('Visible');
                    setPage(page + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

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
                                setSelectedTag(e === 'All' ? '' : e);
                            }}
                        >
                            {e}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filteredData?.map((e, index) => {
                        if (filteredData?.length === index + 1) {
                            return (
                                <div ref={lastObserverRef}>
                                    <ColorCard
                                        colorThemes={e?.colorCodes}
                                        handleSelect={() => {
                                            setModalOpen(true);
                                            setSelectedTheme(e);
                                        }}
                                        type={e?.type}
                                        key={`colorcard${index}`}
                                    />
                                </div>
                            );
                        }

                        return (
                            <ColorCard
                                colorThemes={e?.colorCodes}
                                handleSelect={() => {
                                    setModalOpen(true);
                                    setSelectedTheme(e);
                                }}
                                type={e?.type}
                                key={`colorcard${index}`}
                            />
                        );
                    })}
                </div>

                {loading && <Loader/>}
            </div>
        </>
    );
};

export default OuterWrapper(Color);

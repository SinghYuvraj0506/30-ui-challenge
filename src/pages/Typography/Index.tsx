import { useRef, useState, useCallback, useEffect } from 'react';
import OuterWrapper from '../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../libs/config';
import { TypographyData, typographyTags } from '../../libs/constants';
import TypographyCard from './_components/TypographyCard';
import TypographyDialogWrapper from './_components/TypographyDialogWrapper';
import Search from '../../components/Search';
import useFetchTypography from '../../hooks/useFetchTypography';
import Loader from '../../components/Loader';
import useDebounce from '../../hooks/useDebounce';

const Typography = () => {
    const [SelectedTag, setSelectedTag] = useState({ style: '', industry: '' });
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [modalData, setModalData] = useState<{
        open: boolean;
        data: TypographyData | null;
    }>({ open: false, data: null });

    const observer = useRef<IntersectionObserver>();

    const {debouncedInputValue} = useDebounce(search)

    useEffect(() => {
        setData([]);
        setPage(1);
    }, [SelectedTag,debouncedInputValue])

    const {
        data: filteredData,
        loading,
        hasMore,
        setData
    } = useFetchTypography({ page, industry: SelectedTag?.industry, search: debouncedInputValue, style: SelectedTag?.style });


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
            {modalData?.open && (
                <TypographyDialogWrapper
                    onClose={() => {
                        setModalData({ open: false, data: null });
                    }}
                    data={modalData?.data as TypographyData}
                    setModalData={(e) => {
                        setModalData({ open: true, data: e });
                    }}
                />
            )}

            <div className="py-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className={clsx(config.typography.head48, 'font-normal')}>Typography</h2>
                    <span className={clsx(config.typography.text16, 'text-textBlack01 opacity-40')}>
                        Choose your best font that suit your design language
                    </span>
                </div>

                <Search
                    selectedIndustry={SelectedTag?.industry}
                    selectedStyle={SelectedTag?.style}
                    handleSelectIndustry={(e) => {
                        setSelectedTag({ ...SelectedTag, industry: e });
                    }}
                    handleSelectStyle={(e) => {
                        setSelectedTag({ ...SelectedTag, style: e });
                    }}
                    onChangeInput={(e)=>{setSearch(e)}}
                />

                <div className="flex items-center gap-4 w-full overflow-x-auto no-scrollbar">
                    {typographyTags?.map((e) => (
                        <span
                            className={clsx(
                                'py-4 w-max text-nowrap px-8 border rounded-[50px] cursor-pointer',
                                SelectedTag?.style === e
                                    ? 'bg-[#5F51F11A] border-transparent text-[#5F51F1]'
                                    : 'bg-transparent border-[#0807141F]',
                                config.typography.text16
                            )}
                            onClick={() => {
                                setSelectedTag({ ...SelectedTag, style: e === 'All' ? '' : e });
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
                                <div ref={lastObserverRef as any}>
                                    <TypographyCard
                                        key={`${e?.fontName}-${index}`}
                                        {...e}
                                        openModal={() => {
                                            setModalData({ open: true, data: e });
                                        }}
                                    />
                                </div>
                            );
                        }

                        return (
                            <TypographyCard
                                key={`${e?.fontName}-${index}`}
                                {...e}
                                openModal={() => {
                                    setModalData({ open: true, data: e });
                                }}
                            />
                        );
                    })}
                </div>

                {loading && <Loader/>}
            </div>
        </>
    );
};

export default OuterWrapper(Typography);

import { useEffect, useState } from 'react';
import OuterWrapper from '../../components/HOC/OuterWrapper';
import clsx from 'clsx';
import config from '../../libs/config';
import { TypographyData, typographyTags } from '../../libs/constants';
import TypographyCard from './_components/TypographyCard';
import TypographyDialogWrapper from './_components/TypographyDialogWrapper';
import Search from '../../components/Search';

const Typography = () => {
    const [SelectedTag, setSelectedTag] = useState({ style: 'All', industry: 'All' });
    const [filteredData, setFilteredData] = useState<typeof TypographyData>([]);
    const [modalData, setModalData] = useState<{
        open: boolean;
        data: (typeof TypographyData)[0] | null;
    }>({ open: false, data: null });

    useEffect(() => {
        setFilteredData([]);

        const arr = TypographyData?.filter((e) => {
            return e?.style.includes(SelectedTag?.style === "All" ? "" : SelectedTag?.style)
                && (SelectedTag?.industry === "All" ? true : e?.industry?.includes(SelectedTag?.industry))
        });
        setFilteredData(arr);
    }, [SelectedTag]);

    return (
        <>
            {modalData?.open && (
                <TypographyDialogWrapper
                    onClose={() => {
                        setModalData({ open: false, data: null });
                    }}
                    data={modalData?.data as (typeof TypographyData)[0]}
                    setModalData={(e)=>{setModalData({ open: true, data: e })}}
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
                                setSelectedTag({ ...SelectedTag, style: e });
                            }}
                        >
                            {e}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-4 gap-5">
                    {filteredData?.map((e, index) => (
                        <TypographyCard
                            key={`${e?.title}-${index}`}
                            {...e}
                            openModal={() => {
                                setModalData({ open: true, data: e });
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OuterWrapper(Typography);

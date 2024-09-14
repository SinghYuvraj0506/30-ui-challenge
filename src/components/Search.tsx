import clsx from 'clsx';
import { SearchNormal1 } from 'iconsax-react';
import { useEffect, useState } from 'react';
import config from '../libs/config';
import { typographyIndustryTags, typographyTags } from '../libs/constants';

type Props = {
    selectedStyle: string;
    selectedIndustry: string;
    handleSelectStyle: (e: string) => void;
    handleSelectIndustry: (e: string) => void;
};

const Search = ({ handleSelectIndustry, handleSelectStyle, selectedIndustry, selectedStyle }: Props) => {
    const [openMore, setOpenMore] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            if (openMore) {
                body.style.backgroundColor = '#00000080';

                document.addEventListener('click', () => {
                    setOpenMore(false);
                });

                return () => {
                    document.removeEventListener('click', () => {
                        setOpenMore(false);
                    });
                };
            } else {
                body.style.backgroundColor = 'white';
            }
        }
    }, [openMore]);

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            className="flex flex-col gap-2 relative"
        >
            <div className="flex items-center w-full py-3 px-4 rounded-[32px] border border-[#08071429] bg-white gap-3">
                <SearchNormal1 size="24" color="#080714" />
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 focus:outline-none"
                    onMouseDown={() => {
                        setOpenMore(true);
                    }}
                    onChange={(e)=>{
                        const value = e.target.value
                        if (value !== ""){
                            setOpenMore(false)
                        }
                    }}
                />
            </div>

            {openMore && (
                <div className="w-full rounded-[32px] bg-white absolute top-14 p-8 box-border flex flex-col gap-12">
                    <h4 className={clsx(config.typography.head24Normal)}>Search by</h4>

                    <div className="flex flex-col gap-5">
                        <h6 className={clsx(config.typography.text16)}>Style</h6>

                        <div className="flex items-center gap-4 w-full flex-wrap">
                            {typographyTags?.map((e) => (
                                <span
                                    className={clsx(
                                        'py-3 w-max text-nowrap px-6 border rounded-[50px] cursor-pointer',
                                        selectedStyle === e
                                            ? 'bg-[#5F51F11A] border-transparent text-[#5F51F1]'
                                            : 'bg-transparent border-[#0807141F]',
                                        config.typography.text14
                                    )}
                                    onClick={() => {
                                        handleSelectStyle(e);
                                        setOpenMore(false);
                                    }}
                                >
                                    {e}
                                </span>
                            ))}
                        </div>

                        <div></div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h6 className={clsx(config.typography.text16)}>Industry</h6>

                        <div className="flex items-center gap-4 w-full flex-wrap">
                            {typographyIndustryTags?.map((e) => (
                                <span
                                    className={clsx(
                                        'py-3 w-max text-nowrap px-6 border rounded-[50px] cursor-pointer',
                                        selectedIndustry === e
                                            ? 'bg-[#5F51F11A] border-transparent text-[#5F51F1]'
                                            : 'bg-transparent border-[#0807141F]',
                                        config.typography.text14
                                    )}
                                    onClick={() => {
                                        handleSelectIndustry(e);
                                        setOpenMore(false);
                                    }}
                                >
                                    {e}
                                </span>
                            ))}
                        </div>

                        <div></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;

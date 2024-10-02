import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ColorData } from '../libs/constants';
import axios from 'axios';

type ColorFetch = {
    page: number;
    limit?: number;
    type: string;
    infiniteScroll?: boolean
};

const useFetchColorPallete = ({ page, type, limit = 40, infiniteScroll = true }: ColorFetch) => {
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(null);
    const [data, setData] = useState<ColorData[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        seterror(null);
        let cancel;

        axios
            .get(`${import.meta.env.VITE_HOST_URL}/api/v1/data/colorPalletes`, {
                params: {
                    page,
                    type,
                    limit
                },
                cancelToken: new axios.CancelToken((c) => (cancel = c))
            })
            .then((e) => {
                if (e?.data?.statusCode !== 200) {
                    toast.error('Could not fetch collor palletes');
                }
                const finalData = e?.data?.data;
                setData((preData) => {
                    return [...preData, ...finalData.data];
                });
                if(infiniteScroll){
                    setHasMore(finalData?.hasNextPage);
                }
                setLoading(false);
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                    return;
                }
                console.log(error);
                seterror(error);
                setLoading(false);
            });


            return () => cancel();
    }, [page, type]);
    
    return { loading, error, data, hasMore, setData };
};

export default useFetchColorPallete;

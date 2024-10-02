import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { TypographyData } from '../libs/constants';
import axios from 'axios';

type typoGraphyFetch = {
    page: number;
    limit?: number;
    style: string;
    industry?: string;
    search?: string;
    infiniteScroll?: boolean
};

const useFetchTypography = ({ page, style, industry, search, limit = 40, infiniteScroll = true }: typoGraphyFetch) => {
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(null);
    const [data, setData] = useState<TypographyData[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setLoading(true);
        seterror(null);
        let cancel;

        axios
            .get(`${import.meta.env.VITE_HOST_URL}/api/v1/data/typographies`, {
                params: {
                    page,
                    style,
                    industry,
                    search,
                    limit
                },
                cancelToken: new axios.CancelToken((c) => (cancel = c))
            })
            .then((e) => {
                if (e?.data?.statusCode !== 200) {
                    toast.error('Could not fetch typographies');
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
    }, [page, style, industry, search]);
    
    return { loading, error, data, hasMore, setData };
};

export default useFetchTypography;

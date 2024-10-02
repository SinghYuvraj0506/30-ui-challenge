import { useEffect, useState } from 'react';

const useDebounce = (inputValue: string) => {
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(inputValue);
        }, 500);
        return () => clearTimeout(delayInputTimeoutId);
    }, [inputValue, 500]);

    return {debouncedInputValue} ;
};

export default useDebounce;

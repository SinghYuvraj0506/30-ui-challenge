import clsx from 'clsx';
import { ComponentType, FC } from 'react'

const DialogWrapper = <P extends object>(WrappedComponent: ComponentType<P>, className?:string): FC<P> => {
    const Wrapper: FC<P> = (props) => {
        return (
            <div className={clsx("fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-[#0000006e] z-[100]",className)}>
                <WrappedComponent {...props} />
            </div>
        );
    };

    Wrapper.displayName = `Wrapper(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return Wrapper;
};

export default DialogWrapper
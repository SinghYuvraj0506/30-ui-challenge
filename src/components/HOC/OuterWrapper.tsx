import clsx from 'clsx';
import { FC, ComponentType } from 'react';

const OuterWrapper = <P extends object>(WrappedComponent: ComponentType<P>, className?:string): FC<P> => {
    const Wrapper: FC<P> = (props) => {
        return (
            <div className={clsx("w-full h-full px-[4vw] sm:px-[8vw]",className)}>
                <WrappedComponent {...props} />
            </div>
        )
    }

    Wrapper.displayName = `Wrapper(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return Wrapper;
};

export default OuterWrapper;

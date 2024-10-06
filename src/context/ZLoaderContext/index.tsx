import { createContext, useState } from 'react';

import { PropsType, ZLoaderContextType } from './types';

const ZLoaderContextState = createContext<ZLoaderContextType>({
    open: false,
    setOpen: () => {},
});

const ZLoaderContext = (props: PropsType) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ZLoaderContextState.Provider value={{ open, setOpen }}>
            {props.children}
        </ZLoaderContextState.Provider>
    );
};

export { ZLoaderContext, ZLoaderContextState };

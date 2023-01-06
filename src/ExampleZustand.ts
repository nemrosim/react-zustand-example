import create from 'zustand';
import shallow from 'zustand/shallow';
import { devtools, persist } from 'zustand/middleware';

interface ZustandStoreProps {
    containerData: boolean;
    setContainerData: (value: boolean) => void;
    innerOneData: boolean;
    setInnerOneData: (value: boolean) => void;
    innerTwoData: boolean;
    setInnerTwoData: (value: boolean) => void;
}

export const useZustandStore = create<
    ZustandStoreProps,
    [['zustand/devtools', never], ['zustand/persist', never]]
>(
    devtools(
        persist((set) => ({
            containerData: false,
            setContainerData: (args) =>
                set({ containerData: args }, false, { type: 'setContainerData', value: args }),
            innerOneData: false,
            setInnerOneData: (args) =>
                set({ innerOneData: args }, false, { type: 'setInnerOneData', value: args }),
            innerTwoData: false,
            setInnerTwoData: (args) =>
                set({ innerTwoData: args }, false, { type: 'setInnerTwoData', value: args }),
        })),
        { name: 'useZustandStore', trace: true },
    ),
);

export const useInnerOneZustandStore = () =>
    useZustandStore(
        (state) => ({
            set: state.setInnerOneData,
            data: state.innerOneData,
        }),
        shallow,
    );

export const useInnerTwoZustandStore = () =>
    useZustandStore(
        (state) => ({
            set: state.setInnerTwoData,
            data: state.innerTwoData,
        }),
        shallow,
    );

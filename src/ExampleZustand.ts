import create from 'zustand';

interface ZustandStoreProps {
    containerData: boolean,
    setContainerData: (value: boolean) => void,
    innerOneData: boolean,
    setInnerOneData: (value: boolean) => void,
    innerTwoData: boolean,
    setInnerTwoData: (value: boolean) => void,
}

export const useZustandStore = create<ZustandStoreProps, any>(
  (set) => ({
      containerData: false,
      setContainerData: (args) => set({ containerData: args }),
      innerOneData: false,
      setInnerOneData: (args) => set({ innerOneData: args }),
      innerTwoData: false,
      setInnerTwoData: (args) => set({ innerTwoData: args }),
  }),
);

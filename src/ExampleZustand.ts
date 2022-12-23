import create from 'zustand';
import shallow from "zustand/shallow";

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

export const useInnerOneZustandStore = () => useZustandStore((state) => ({
      set: state.setInnerOneData,
      data: state.innerOneData,
  }),
  shallow);

export const useInnerTwoZustandStore = () => useZustandStore((state) => ({
      set: state.setInnerTwoData,
      data: state.innerTwoData,
  }),
  shallow);

export const useContainerZustandStore = () => useZustandStore((state) => ({
      set: state.setContainerData,
      data: state.containerData,
  }),
  shallow);

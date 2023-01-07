import React, { useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ExampleContextProps {
    containerData: boolean;
    setContainerData: Dispatch<SetStateAction<boolean>>;
    innerOneData: boolean;
    setInnerOneData: Dispatch<SetStateAction<boolean>>;
    innerTwoData: boolean;
    setInnerTwoData: Dispatch<SetStateAction<boolean>>;
}

const InitialState: ExampleContextProps = {
    containerData: false,
    setContainerData: () => undefined,
    innerOneData: false,
    setInnerOneData: () => undefined,
    innerTwoData: false,
    setInnerTwoData: () => undefined,
};

const ExampleContext = React.createContext<ExampleContextProps>(InitialState);

export const ExampleContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [containerData, setContainerData] = useState(false);
    const [innerOneData, setInnerOneData] = useState(false);
    const [innerTwoData, setInnerTwoData] = useState(false);

    return (
        <ExampleContext.Provider
            value={{
                containerData,
                setContainerData,
                innerOneData,
                setInnerOneData,
                innerTwoData,
                setInnerTwoData,
            }}
        >
            {children}
        </ExampleContext.Provider>
    );
};

export const useExampleContext = (): ExampleContextProps => {
    const context = useContext<ExampleContextProps>(ExampleContext);

    if (context === null) {
        throw new Error('"useExampleContext" should be used inside a "ExampleContextProvider"');
    }

    return context;
};

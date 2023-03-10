import React, { memo } from 'react';
import {
    useInnerOneZustandStore,
    useInnerTwoZustandStore,
    useZustandStore,
} from './ExampleZustand';
import _ from 'lodash';
import shallow from 'zustand/shallow';
import { MemoizedAsyncActions } from '../AsyncActions';

import './App.css';

let appRenderedTimes = 0;
export const App: React.FC = () => {
    appRenderedTimes++;

    return (
        <div className="App Common">
            <span>App rendered: {appRenderedTimes}</span>
            <Container />
        </div>
    );
};

let containerRenderedTimes = 0;
export const Container = () => {
    containerRenderedTimes++;

    // This will trigger component re-render on "containerData" update only
    const containerData = useZustandStore((state) => state.containerData, shallow);

    const handleOnClick = () => {
        // You can get access the store by "getState" function
        useZustandStore.getState().setContainerData(!containerData);
    };

    return (
        <div
            role="button"
            className="Container Common"
            style={{}}
            onClick={handleOnClick}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleOnClick();
                }
            }}
            tabIndex={0}
        >
            <span>
                Container rendered: {containerRenderedTimes}
                {`: ${containerData}`}
            </span>
            <MemoizedInnerOne />
            <MemoizedInnerTwo />
            <MemoizedAsyncActions />
        </div>
    );
};

let innerOneRenderedTimes = 0;
export const InnerOne = () => {
    innerOneRenderedTimes++;

    const { set, data } = useInnerOneZustandStore();

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        set(!data);
    };

    return (
        <button
            className="InnerOne Common"
            onClick={handleOnClick}
            onKeyDown={(e) => e.stopPropagation()}
        >
            Inner one rendered: {innerOneRenderedTimes}
            {`: ${data}`}
        </button>
    );
};

const MemoizedInnerOne = memo(InnerOne, function propAreEqual() {
    // Simple example with component with no props
    return true;
});

let innerTwoRenderedTimes = 0;
export const InnerTwo = () => {
    innerTwoRenderedTimes++;

    const { set, data } = useInnerTwoZustandStore();

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        set(!data);
    };

    return (
        <button
            className="InnerTwo Common"
            onClick={handleOnClick}
            onKeyDown={(e) => e.stopPropagation()}
        >
            Inner two rendered: {innerTwoRenderedTimes}
            {`: ${data}`}
        </button>
    );
};

const MemoizedInnerTwo = memo(InnerTwo, function propAreEqual(prevProps, nextProps) {
    // Example with lodash. This will work with "props" and "no props"
    return _.isEqual(prevProps, nextProps);
});

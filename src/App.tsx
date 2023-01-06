import React, { memo } from 'react';
import {
    useContainerZustandStore,
    useInnerOneZustandStore,
    useInnerTwoZustandStore,
} from './ExampleZustand';
import _ from 'lodash';

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

    // const { containerData, setContainerData } = useExampleContext();
    const { set, data } = useContainerZustandStore();

    const handleOnClick = () => {
        set(!data);
    };

    return (
        <button className="Container Common" onClick={handleOnClick}>
            <span>
                Container rendered: {containerRenderedTimes}
                {`: ${data}`}
            </span>
            <MemoizedInnerOne />
            <MemoizedInnerTwo />
        </button>
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
        <button className="InnerOne Common" onClick={handleOnClick}>
            <span>
                Inner one rendered: {innerOneRenderedTimes}
                {`: ${data}`}
            </span>
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

    // const { innerTwoData, setInnerTwoData } = useExampleContext();
    const { set, data } = useInnerTwoZustandStore();

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        set(!data);
    };

    return (
        <button className="InnerTwo Common" onClick={handleOnClick}>
            Inner two rendered: {innerTwoRenderedTimes}
            {`: ${data}`}
        </button>
    );
};

const MemoizedInnerTwo = memo(InnerTwo, function propAreEqual(prevProps, nextProps) {
    // Example with lodash. This will work with "props" and "no props"
    return _.isEqual(prevProps, nextProps);
});

import React from 'react';
import { useExampleContext } from "./ExampleContext";
import './App.css';
import { useZustandStore } from "./ExampleZustand";
import shallow from "zustand/shallow";

let appRenderedTimes = 0;
export const App: React.FC = () => {
    appRenderedTimes++;

    return (
      <div className="App Common">
          <span>App rendered: {appRenderedTimes}</span>
          <Container/>
      </div>
    );
}

let containerRenderedTimes = 0;
export const Container = () => {
    containerRenderedTimes++

    const { containerData, setContainerData } = useExampleContext();
    const { set, data } = useZustandStore((state) => ({
          set: state.setContainerData,
          data: state.containerData,
      }),
      shallow);

    const handleOnClick = () => {
        set(!data)
    }

    return (
      <div className='Container Common'
           onClick={handleOnClick}
      >
          <span>Container rendered: {containerRenderedTimes}{`: ${data}`}</span>
          <InnerOne/>
          <InnerTwo/>
      </div>
    )
}

let innerOneRenderedTimes = 0;
export const InnerOne = () => {
    innerOneRenderedTimes++

    const { innerOneData, setInnerOneData } = useExampleContext();
    const { set, data } = useZustandStore((state) => ({
          set: state.setInnerOneData,
          data: state.innerOneData,
      }),
      shallow);

    const handleOnClick = (event:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        set(!data)
    }

    return (
      <div className='InnerOne Common'
           onClick={handleOnClick}
      >
          <span>Inner one rendered: {innerOneRenderedTimes}{`: ${data}`}</span>
      </div>
    )
}

let innerTwoRenderedTimes = 0;
export const InnerTwo = () => {
    innerTwoRenderedTimes++

    const { innerTwoData, setInnerTwoData } = useExampleContext();
    const { set, data } = useZustandStore((state) => ({
          set: state.setInnerTwoData,
          data: state.innerTwoData,
      }),
      shallow);

    const handleOnClick = (event:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        set(!data)
    }

    return (
      <div className='InnerTwo Common'
           onClick={handleOnClick}
      >
          <span>Inner two rendered: {innerTwoRenderedTimes}{`: ${data}`}</span>
      </div>
    )
}

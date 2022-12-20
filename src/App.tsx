import React from 'react';
import { useExampleContext } from "./ExampleContext";
import './App.css';

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

    const handleOnClick = () => {
        setContainerData((prevState) => !prevState)
    }

    return (
      <div className='Container Common'
           onClick={handleOnClick}
      >
          <span>Container rendered: {containerRenderedTimes}{`: ${containerData}`}</span>
          <InnerOne/>
          <InnerTwo/>
      </div>
    )
}

let innerOneRenderedTimes = 0;
export const InnerOne = () => {
    innerOneRenderedTimes++

    const { innerOneData, setInnerOneData } = useExampleContext();

    const handleOnClick = (event:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setInnerOneData((prevState) => !prevState)
    }

    return (
      <div className='InnerOne Common'
           onClick={handleOnClick}
      >
          <span>Inner one rendered: {innerOneRenderedTimes}{`: ${innerOneData}`}</span>
      </div>
    )
}

let innerTwoRenderedTimes = 0;
export const InnerTwo = () => {
    innerTwoRenderedTimes++

    const { innerTwoData, setInnerTwoData } = useExampleContext();

    const handleOnClick = (event:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setInnerTwoData((prevState) => !prevState)
    }

    return (
      <div className='InnerTwo Common'
           onClick={handleOnClick}
      >
          <span>Inner two rendered: {innerTwoRenderedTimes}{`: ${innerTwoData}`}</span>
      </div>
    )
}

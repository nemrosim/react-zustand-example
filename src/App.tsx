import React from 'react';
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
    return (
      <div className='Container Common'>
          <span>Container rendered: {containerRenderedTimes}</span>
          <InnerOne/>
          <InnerTwo/>
      </div>
    )
}

let innerOneRenderedTimes = 0;
export const InnerOne = () => {
    innerOneRenderedTimes++

    return (
      <div className='InnerOne Common'>
          <span>Inner one rendered: {innerOneRenderedTimes}</span>
      </div>
    )
}

let innerTwoRenderedTimes = 0;
export const InnerTwo = () => {
    innerTwoRenderedTimes++

    return (
      <div className='InnerTwo Common'>
          <span>Inner two rendered: {innerTwoRenderedTimes}</span>
      </div>
    )
}

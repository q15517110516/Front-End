import React from 'react';
import ReactDom from 'react-dom';
import Button from './button';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div) // add component to the div
})

it("renders button correctly", ()=>{
    const{getByTestId} = render(<Button label="click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent('click me')
}); // here test the component Button

it("renders button correctly", () =>{
    const{getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent('save')
})
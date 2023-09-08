import Form from './components/form';
import Header from './components/header';
import Item from './components/item';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

test('Greet Techtonica audience', () => {
    const { getByText } = render(<Header />);
    expect(getByText("Hello Techtonica!")).toBeDefined();
});

//I am unsure of why this works :) ... maybe I can come to an office hour next week?
test('Do list items render?', () => {
    const { getByText } = render(<Item item={{ text: 'I am thankful for Cristina!' }} />);
    expect(getByText("I am thankful for Cristina!")).toBeDefined();
});

test('Does the form component render correctly?', () => {
    const {getByTestId} = render(<Form />);
    expect(getByTestId("form")).toBeDefined();
});

test('Prop rendering in <h4>', () => {
    const { getByText } = render(<Header name="Miles"/>);
    expect(getByText("Miles's Gratitud List")).toBeDefined();
});

test("Does the submit button render?", () => {
    const {getByText} = render(<Form />);
    expect(getByText("Submit")).toBeDefined();
})




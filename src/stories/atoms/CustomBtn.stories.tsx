import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';  
import Button from '../../atoms/button/Button';

export default {
    title : 'Atoms/Custom-Button',
    comment : Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const NewBtn = Template.bind({});
NewBtn.args = {
    color: 'red',
    caption: 'New',
    size : 'small',
}

export const BlueBtn = Template.bind({});
BlueBtn.args = {
    color: 'blue',
    caption : 'Blue button',
    primary : true
}

export const TestBtn = Template.bind({});
TestBtn.args = {
    color: 'yellow',
    size : 'small',
    caption : 'Test button',
}
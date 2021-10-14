import React from 'react';
import Hero from '.';

export default {
  title: 'Component/Hero',
  component: Hero,
};


const Template = (args: any) => (
  <Hero {...args} />
);


const props = {
  defaultProps: () => ({
    className: ''
  }),

};


export const heroDefault: any = Template.bind({});
const defaultProps = props.defaultProps();
heroDefault.storyName = 'Default';
heroDefault.args = {
  ...defaultProps,
};
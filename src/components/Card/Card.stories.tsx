import React from 'react';
import Card from '.';

export default {
  title: 'Component/Card',
  component: Card,
};


const Template = (args: any) => (
  <Card {...args} />
);


const props = {
  defaultProps: () => ({
    className: '',
    postData: {
        title: 'Title',
        description: 'description',
        date: '06/09/1969',
        thumbnail: 'https://picsum.photos/300/300'
    }
  }),

};


export const cardDefault: any = Template.bind({});
const defaultProps = props.defaultProps();
cardDefault.storyName = 'Default';
cardDefault.args = {
  ...defaultProps,
};
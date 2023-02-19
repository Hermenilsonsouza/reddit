import React from 'react';
import {render} from '@testing-library/react-native';
import Card from './card';
import {CardProps} from './types';
import moment from 'moment';

const makeSut = (otherProps?: Partial<CardProps>) => {
  const props: CardProps = {
    authorFullname: 't2_63val2uo',
    title: 'any_title',
    onPress: jest.fn(),
    link: 'any_link',
    ups: 44889,
    numComments: 6,
    created: 1676472000.0,
    url: 'https://b.thumbs.redditmedia.com/Kcl7QHZgBChhHrGhue6f6VNXMFLtqiKpBYGODPFJnFU.jpg',
    ...otherProps,
  };
  const component = render(<Card {...props} />);
  return {component, props};
};

describe('Card', () => {
  it('there is snapshot when have a image', () => {
    const {component} = makeSut();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('there is not snapshot when have a image', () => {
    const {component} = makeSut({url: undefined});
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should there is a image', () => {
    const {component} = makeSut();
    const img = component.getByTestId('image');

    expect(img).toBeTruthy();
  });

  it('should there is not a image', () => {
    const {component} = makeSut({url: undefined});
    const img = component.queryByTestId('image');

    expect(img).toBeFalsy();
  });

  it('should there is a all texts', () => {
    const {component} = makeSut();
    const title = component.getByText('any_title');
    const author = component.getByText('t2_63val2uo');

    expect(title).toBeTruthy();
    expect(author).toBeTruthy();
  });

  it('should there is a formated date', () => {
    const {component, props} = makeSut();
    const date = component.queryByTestId('date');

    expect(date).toBeTruthy();

    const formated = moment(props.created).calendar();
    expect(date?.children[0]).toBe(formated);
  });
});

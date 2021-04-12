import { expect } from 'chai';
import React from 'react';
import Card from 'src/components/Card';
import Content from 'src/components/Content';

import { shallow } from 'enzyme';

describe('Composant Home', () => {
  const recipes = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
  ];

  const wrapper = shallow(<Content recipes={recipes} title="Lorem ipsum" />);

  it('render 5 <Card> when 5 recipes given', () => {
    expect(wrapper.find(Card)).to.have.lengthOf(4);
  })

  it('contains an element with .content-list class', () => {
    expect(wrapper.find('.content-list')).to.have.lengthOf(1);
  })

});

import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components'
import { product } from '../data/products';

const { act } = renderer;

describe('ProductCard', () => {
  test('Must render correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {
          () => (
            <>
              <h1> Product Card </h1>
            </>
          )
        }
      </ ProductCard >
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  test('Must increase counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {
          ({count, increaseBy}) => (
            <>
              <h1> Product Card </h1>
              <span>{count}</span>
              <button onClick={()=>increaseBy(1)}>increase</button>
            </>
          )
        }
      </ ProductCard >
    );
    let tree = wrapper.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick()
    });
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  })
})

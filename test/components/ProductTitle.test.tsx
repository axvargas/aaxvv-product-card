import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductTitle } from '../../src/components'
import { product } from '../data/products';


describe('ProductTitle', () => {
  test('Must render with the personalized title', () => {
    const wrapper = renderer.create(<ProductTitle title="My Custom Title" />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  test('Must render with the name of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ ProductCard >
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

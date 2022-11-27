import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../src/components'
import { product2 } from '../data/products';


describe('ProductImage', () => {
  test('Must render with the personalized image', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  test('Must render the ProductCard with the image of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ ProductCard >
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

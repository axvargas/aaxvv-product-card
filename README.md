# axvv-product-card

This is a simple product card component

## Example

```
import  {ProductCard, ProductImage, ProductTitle, ProductButtons }  from  'axvv-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    quantity: 4,
    // maxQuantity: 10
  }}
>
  {
    ({reset, count, maxCount, isMaxCountReached, increaseBy})=>(
      <>
        <ProductImage/>
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```

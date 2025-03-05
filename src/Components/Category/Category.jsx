import React from 'react'
import classes from './Category.module.css'
import { categoryInfos } from './CategoryProducts'
import Categorycard from './Categorycard'

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((singleProduct, i) => (
        <Categorycard key={i} data={singleProduct} />
      ))}
    </section>
  );
}
export default Category

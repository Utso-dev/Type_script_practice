type productsType = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

const products:productsType[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice = (products: productsType[]) => {
    let totalPrice = products.reduce((acc, product: productsType) => {
        // calculate discount if available 
        const discout = product.discount ? ((product.price *product.quantity ) * product.discount)/100 : 0 ;
         
        // total price after discount
       const individualTotalproductPrice = (product.price * product.quantity) -discout ;

        
      return acc + individualTotalproductPrice

       
    },0)

    return totalPrice;
}

console.log(calculateTotalPrice(products)); // 117.5

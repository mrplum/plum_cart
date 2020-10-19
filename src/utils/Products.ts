import IProductShoppingCart from '../components/IProductShoppingCart';

export const addProduct = (product: IProductShoppingCart) : void => {
  const old = JSON.parse(localStorage.getItem('shoppingcart'));
  const aux={
    id: product.id,
    price: product.price * product.qty,
    qty:product.qty
  };
  if(old === null){
    const array=[];
    array.push(aux);
    localStorage.setItem('shoppingcart', JSON.stringify(array));
  }
  else{
    const element= old.find(p => p.id === aux.id);
    console.log(element);
    if(element){
      const newList= old.filter(p=> p.id !== aux.id);
      aux.qty= aux.qty + parseInt(element.qty,10);
      aux.price= aux.price + parseInt(element.price,10);
      newList.push(aux);
      localStorage.setItem('shoppingcart', JSON.stringify(newList));
    }
    else{
      old.push(aux);
      localStorage.setItem('shoppingcart', JSON.stringify(old));
    }
  }
  
  alert('product added');
};

export default addProduct;
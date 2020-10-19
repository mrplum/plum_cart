import IProductShoppingCart from '../components/IProductShoppingCart';

export const addProduct = (product: IProductShoppingCart) : void => {
  const old = JSON.parse(localStorage.getItem('shoppingcart'));
  const aux={
    id: product.id,
    img: product.img,
    title: product.title,
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
    if(element){
      const newList= old.filter(p=> p.id !== aux.id);
      aux.qty=aux.qty + element.qty;
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
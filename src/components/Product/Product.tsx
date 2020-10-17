import React from 'react';
 import IDataJson from '../DataJson';
import SelectButton from '../SelectButton';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import style from './Product.module.css';


  const Product = ({data}:{data:IDataJson}): JSX.Element =>  {
    const [state, setState] = React.useState<{ qty: number}>({
      qty: 1,
    });
  
    const handleChange = (event: React.ChangeEvent<{value: number }>) => {
      setState({
        ...state,
        qty: parseInt(event.target.value,10),
      });
    };

    const addProduct = (event: React.ChangeEvent) => {
      event.preventDefault();
      const old = JSON.parse(localStorage.getItem('shoppingcart'));
      const aux={
        id: data.id,
        img: data.img,
        title: data.title,
        price: data.price * state.qty,
        qty: state.qty
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
    }

    const values=[];
    for (let i = 1; i <= data.stock ; i++) {
      values.push(i);
    }
    return(
    <div className={style.root}>
        <div className={style.left}>
          <div className={style.centeredLeft}>
            <h1 className={style.title}>{data.title} </h1>
            <img src={`/${data.img}`} alt={''} className={style.img}></img>
          </div>      
        </div>
        <div className={style.right}>
          <div className={style.centeredRight}>
              <h2 className={style.description}>{data.description}</h2>
              <div className={style.containerButton}>
                <IconButton   aria-label={`star ${data.title}`} color={"default"}  onClick={addProduct} >
                      <AddShoppingCartIcon />
                      <p>Add</p>
                </IconButton>
                <SelectButton name="Quantity" values={values} handle={handleChange}/>
              </div>
              <p className={style.price}>${data.price*state.qty}</p>
            </div>
        </div>
    </div>
  );
}

export default Product;
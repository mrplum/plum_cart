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
        qty: event.target.value,
      });
    };

    const values=[];
    for (let i = 1; i <= data.stock ; i++) {
      values.push(i);
    }
    console.log(state.qty);
    return(
    <div className={style.root}>
        <div className={style.left}>
          <div className={style.centered}>
            <h1 className={style.title}>{data.title} </h1>
            <img src={`/${data.img}`} alt={''} className={style.img}></img>
          </div>      
        </div>
        <div className={style.right}>
          <div className={style.centered}>
              <h2 className={style.description}>{data.description}</h2>
               <p className={style.price}>${data.price*state.qty}</p>
              <div className={style.containerButton}>
                <IconButton   aria-label={`star ${data.title}`} color={"primary"} >
                      <AddShoppingCartIcon />
                      <p>Add</p>
                </IconButton>
                <SelectButton name="Quantity" values={values} handle={handleChange}/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Product;
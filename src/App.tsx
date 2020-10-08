import React from 'react';
import ImageList from './components/List/ImageList';
import CardList from './components/List/CardList';
import data from './data.json';

/*pasar data con props */
/*sombra a card cuando cursor */
function App() : JSX.Element {
  return (
    <div >
      <CardList data={data} />
    </div>
  );
}

export default App;

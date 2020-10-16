import React from 'react';
import PropTypes from 'prop-types';


const colorILike = [
  {
    id: 1,
    name: 'blue',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAA1BMVEUCAloddjPcAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8GxXIAARdOqd4AAAAASUVORK5CYII=',
    rank: 2
  },
  {
    id: 2,
    name: 'beige',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAABlBMVEXOwKbPwacPMGkwAAACNElEQVR4nO3aW26DMBQAUdj/plupqCIaQwCb69ecv1YltifgQpRlObP+Ov7xResmdNBrqs3HJumBG22yVJvPf5KKc5DUPO4PzW2j4WxCNiGbnLIF2YRsQjYpxpRkE5qsSexHeTEj5bIJ2YRsIkkf3KzIJjR3k/TqbXL1t7OwCc3SpJsVBc7TJsmhbFJvqDyNTrSbcyqQTcgmZBOyCdmEbCJJkuq6eTOyu3mpcx8TMahNssewSfLPx28yMvuRTcgmNEATP7ghm5BNrsovNV5rm5BNyCaSpuTWRTYhm8SxNdmEbEI2qcLsZBOySYJNpJ68eMV2u0PaZLObrE02NpH0zecF/PByHmsXWNHkyerG2hptQjbpgoHJJIp390qc4Sy1CdmE7q5wxRHjN7pvNQvYhGwiSff47E02oYmbzLvyQxOfDYdsQja56lKpoJytvGk2IZvQxE1aeQu+ifxHYJPkWFFDZWnqhmH9k/cKX39TQPorQumhMtf0UpPiUdJf/UiPtGYuyiaHxz89fBmxSVExefpiE7IJ2eTUaYtJS9mExmpSdb6Nxqr6JtokOXi1sU/Y5KHMR6TILz118lmVTRJHx8008FLspUnD21N3N2kBbEI2kaQz7pJkE7IJzdJkqHUWWoxNXnuZNgy1mPdYiWxCNiGbSJKkV+xuMrzf2Oye7XzM29iEGm/S4JSqswnZhGzykhY3ytpsQl03KTb36y8UP+Lt1+21yWunYo0mhQzUpNg6jqf+A1g3A+1JER/mAAAAAElFTkSuQmCC',
    rank: 1
  },
  {
    id: 3,
    name: 'black',
    image: 'data:image/jpeg;base64,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',
    rank: 3
  }
];

function Color({name, picture, rank}) {
  return (
    <div>
      <h2>my color is {name}</h2>  
      <h4>rank {rank}</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rank: PropTypes.number, 
}


function App() {
  return (
    <div>
      {colorILike.map(color => <Color key={color.id} name={color.name} picture={color.image} rank={color.rank} />)}
    </div>
  );
}





























// function Color({name, picture, rank}) {
//   return (
//     <div>
//       <h2>I like the color, {name}!</h2>
//       <h4>RANK {rank}</h4>
//       <img src={picture} alt={name}></img>
//     </div>
//   );
// }

// Color.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rank: PropTypes.number,
// }

// function App() {
//   return (
//     <div>
//       {colorILike.map(color => 
//         <Color key={color.id} name={color.name} picture={color.image} rank={color.rank} />
//       )};
//     </div>
//   );
// }

export default App;

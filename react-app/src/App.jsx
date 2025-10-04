// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <h1>hoge/</h1>
//     </div>
//   );
// }
// export default App;

import { useState } from 'react'
import { ColorfullMessag } from "./component/ColorfullMessage";

export const App = () => {
  const [num, setNum ] = useState(0);
  const onClickCountUp = () => {
    // 下2行はやってることは同じ
    // setNum((prev) => prev + 1);
    // setNum(num + 1);

    // 1ずつ増える
    // setNum(num + 1);
    // setNum(num + 1);

    // 2ずつ増える
    // setNum((prev) => prev + 1);
    // setNum((prev) => prev + 1);

    setNum(num + 1);
  };
  const contenStyle = {
    color: 'green',
    fontSize: '20px'
  }

  return (
    // React.fragment or 空タグ
    <>
      <h1>hh</h1>
      <ColorfullMessag color='blue' >お元気ですか？</ColorfullMessag>
      <ColorfullMessag color='green' >お元気です</ColorfullMessag>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

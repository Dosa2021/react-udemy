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

import { useState, useEffect } from 'react'
import { ColorfullMessag } from "./component/ColorfullMessage";

export const App = () => {
  // Note: consoleが2回表示される。開発時のみ？StrictMode on なら2回
  console.log('--App--')
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
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
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  }

  // Note: on/off が効かない。こういうケース時に useEfect を使用する
  // if (num % 3 === 0) {
  //   isShowFace || setIsShowFace(true);
  // } else {
  //   isShowFace && setIsShowFace(false);
  // }
  // Note: useEffect は指定した変数が変更された時にのみ動作する
  useEffect(() => {
    if (num % 3 === 0) {
      isShowFace || setIsShowFace(true);
    } else {
      isShowFace && setIsShowFace(false);
    }
  }, [num])

  return (
    // React.fragment or 空タグ
    <>
      <h1>hh</h1>
      <ColorfullMessag color='blue' >お元気ですか？</ColorfullMessag>
      <ColorfullMessag color='green' >お元気です</ColorfullMessag>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>hoge hoge</p>}
    </>
  );
};

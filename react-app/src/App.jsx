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

import { ColorfullMessag } from "./component/ColorfullMessage";

export const App = () => {
  const onClickBtn = () => alert();
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
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
};

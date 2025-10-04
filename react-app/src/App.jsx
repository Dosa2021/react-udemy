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

export const App = () => {
  const onClickBtn = () => alert();
  const contenStyle = {
    color: 'green',
    fontSize: '50px'
  }

  return (
    // React.fragment or 空タグ
    <>
      <h1 style={contenStyle}>hh</h1>
      <p>hogehogefuga</p>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
};

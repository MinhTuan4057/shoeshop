import logo from './logo.svg';
import './App.css';
import BTShoeShop from './BTShoeShop/BTShoeShop';


//component lớn nhất trong dự án

// 2 loại component
// + class component (stateful) <2019 (lifecyle)
// + function component (stateless) 100%
// 1 component chỉ đc phép return về 1 thẻ jsx duy nhất
// attribute: viết theo quy tác camelCase

//JSX: Javascript XML => giúp các bạn viết html trong javascript

function App() {
  return (
    // <div></div>
    <div className="App">
    {/* <span className='title'>HELLO BC47</span>
    <p></p>
    <h1></h1>

    <FunctionComponent></FunctionComponent>
    <ClassComponent></ClassComponent> */}

    <BTShoeShop></BTShoeShop>

</div>
  );
}

export default App;

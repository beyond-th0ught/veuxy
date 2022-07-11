import React,{useState} from 'react';
import Sign from './sign';
import axios from 'axios';
import Main from './main'; 

function App() {
  const signIn = localStorage.getItem('Email')
  // const [data, setdata] = useState([]);
  // const getData = async () => {
  //   const datacommig = await axios.get('/getData')
  //   setdata(datacommig.data)
  //   console.log(datacommig.data)
  // }
  // getData()
  return (
   <div >
         {/* {
          data.map((val, index) => {
            return (<img src={val.image}/>)
          })
        } */}
         {
          signIn?(<Main/>):(<Sign/>)
         }
   </div>
  );
}

export default App;

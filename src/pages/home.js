import React,{useEffect} from 'react';
import H2 from '../component/h2';




const Home = () => {
  useEffect(()=>{
    document.title="Home";
  },[]);


  return (
    <>
    <div className="container">
    <H2 title='HOME'/>
    </div>
   
    </>
  )
}

export default Home
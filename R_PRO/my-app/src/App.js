import BasicExample from './component/card.js';
import FormeTest from './component/Form.js'
import NavBar1 from './component/navbar.js';
import Notfound from './component/404.js';
import em1 from './images/em1.jpg';
import em2 from './images/em2.jpeg';
import em3 from './images/em3.png';
const App = () => {
  const ch=0;
  const data=[
  {title:'book333',descrition:'book1',img:em1},
  {title:'book2',descrition:'book2',img:em2},
  {title:'book3',descrition:'book3',img:em3}];
//  const  onchangehandler=(p)=>{
//     alert("Edeted " + p.target.value )
//   }
   const printtitle =()=>{
    alert("this is from app file " )
   }
  return (
    <div>
    <NavBar1 />
    <FormeTest/>
    {
   ch? data.map((item,index)=>{
    return(
     
     <BasicExample key={item.index} title={item.title} descrition={item.descrition} img={item.img} Click={printtitle}>       
    </BasicExample>
      )


  }):(<Notfound messege="no data" color="danger"/>)
    }
{/* 
    <BasicExample title={data[0].title} descrition={data[0].descrition}/>
    <BasicExample title={data[1].title} descrition={data[1].descrition}/>
    <BasicExample title={data[2].title} descrition={data[2].descrition} />
    */}
  
    </div>);
};

export default App;

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [to_do,setToDo] = useState('');
  const [element_of_list,setTextElement] = useState([]);
  console.log('Giriş: ',to_do);
  console.log("Listem: " , element_of_list);

  const changeFunc = (e) => {
    console.log(e);
    setToDo(e.target.value);
  }

  const addFunc = () => {
    if(to_do){
      setToDo('');
      setTextElement(prev => [...prev,to_do])
      //prev demek zorunda değiliz onceki de yazabilirdik sevgi de ,bu yapıyla önceki element_of_list değerlerini alıp sonuna to_do değerini ekliyoruz
    }
    
  }


  return (
    <div className="App" style={{textAlign:'center'}}>
      <div className='container'>
        <h3 style={{color:'red',margin:'20px'}}>YAPILACAKLAR LİSTESİ</h3>
        <div className="row input-group">
          <div className='col-6 ms-auto'>
            <input value={to_do} onChange={changeFunc} className="form-control" type="text" placeholder="Ne Yapmayı Planlıyorsun?"></input>
          </div>
          <div className='col-1 me-auto'>
            <button type='button' className='btn btn-outline-primary' onClick={addFunc}>EKLE</button>
          </div>
        </div>
        <div className='row my-3'>
          <div className='col-7 mx-auto'>
            {
              element_of_list?.map((elm,i) => (//? element_of_list varsa işlemin gerçekleşmesini sağlar
                <div key={i} style={{borderBottom:'1px solid blue',padding:'5px'}}>{elm}</div>
              ))
          }
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

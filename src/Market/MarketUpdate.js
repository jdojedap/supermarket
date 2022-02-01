import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdTeacher,updateTeacher } from '../service/MarketService'
import './Market.css'

function MarketPage() {
  
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({AVE:'',PEZ:'',PORCINO:'',VACUNO:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateTeacher(teacher);

    alert ('CAMBIOS REALIZADOS')

  }
  const onChange = (event) =>{
    if(event.target.name==='AVE')
      setTeacher({...teacher,AVE:event.target.value})    
    if(event.target.name==='PEZ')    
      setTeacher({...teacher,PEZ:event.target.value})
    if(event.target.name==='PORCINO')
      setTeacher({...teacher,PORCINO:event.target.value})
    if(event.target.name==='VACUNO')    
      setTeacher({...teacher,VACUNO:event.target.value})
   
  }

  useEffect(() => {    
    findByIdTeacher(teacherId).then(data => {
      setTeacher(data);  
    }
    );
  }, [teacherId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>ORIGEN DE CARNES</h2>
  
          <input 
          className="formUpdateInput"
            name="AVE"
            placeholder="AVE" 
            value={teacher.AVE}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="PEZ" 
            name="PEZ"
            value={teacher.PEZ}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="PORCINO"
            name="PORCINO"
            value={teacher.PORCINO}
            onChange={onChange}
          />
           
        
        <input 
         className="formUpdateInput"
         placeholder="RES"
          name="RES"
          value={teacher.RES}
          onChange={onChange}
        />
       
        

        <button type="submit" className="formUpdateBtn">GUARDAR INFORMACION</button>
        

      </form>
      
    </div>
  );
}

export default MarketPage;
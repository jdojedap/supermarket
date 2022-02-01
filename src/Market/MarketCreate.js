import React, { useState } from "react";
import { createTeacher } from '../service/MarketService'

function MarketCreate() {

  const [pollo, setpollo] = useState('');
  const [pescado, setpescado] = useState('');
  const [chancho, setchancho] = useState('');
  const [res, setres] = useState('');



  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      pollo: pollo,
      pescado: pescado,
      chancho: chancho,
      res: "res",
     
    }
    createTeacher(objeto)

  }

  const onChange = (event) =>{
    if(event.target.name==='pollo')
    {
    setpollo(event.target.value)
    }
    if(event.target.name==='pescado')
    setpescado(event.target.value)

    if(event.target.name==='chancho')
    setchancho(event.target.value)

    if(event.target.name==='res')
    setres(event.target.value)

   
  }

  return (
    <div>
      <h2>AGREGAR CARNICOS</h2>
      <form onSubmit={onSubmit}>
        <label>
          pollo
          <input 
            name="pollo"
            value={pollo}
            onChange={onChange}
          />
        </label>
        <label>
          pescado
          <input 
            name="pescado"
            value={pescado}
            onChange={onChange}
          />
        </label>
        <label>
          chancho
          <input 
            name="chancho"
            value={chancho}
            onChange={onChange}
          />
        </label>

        <label>
          res
          <input 
            name="res"
            value={res}
            onChange={onChange}
          />
        </label>

        

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default MarketCreate;
import { Link } from "react-router-dom";
import './Market.css'

function Market(props){
   
return(
    <tr > 
        <td>{props.itemTeacher.pollo}</td>        
        <td> {props.itemTeacher.pescado} </td>
        <td> {props.itemTeacher.chancho} </td>
        <td>{props.itemTeacher.res}</td>        
        <td><Link to={`/updateteacher/${props.itemTeacher.id}`}>CAMBIAR DATOS</Link></td>
        
    </tr>
);

}
export default Market
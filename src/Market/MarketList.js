
function MarketList(props){
return(
    <table>
    <thead >
      <tr>
        <th >AVE</th>
        <th>PEZ</th>
        <th>PORCINO</th>
        <th>AVICOLA</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default MarketList
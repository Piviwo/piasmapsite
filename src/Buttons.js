function Buttons({setSelection}) {
  return (
    <div className="button-container">
      <button className="selection-buttons" onClick={()=>setSelection('HOME')}>HOME</button>
      <button className="selection-buttons" onClick={()=>setSelection('TRAVEL')}>TRAVEL</button>
      <button className="selection-buttons" onClick={()=>setSelection('FRIENDS')}>FRIENDS</button>
    </div>
  );
}

export default Buttons;

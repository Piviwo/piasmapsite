function Buttons({setSelection}) {
  return (
    <div className="buttonContainer">
      <button className="selectionButtons" onClick={()=>setSelection('HOME')}>HOME</button>
      <button className="selectionButtons" onClick={()=>setSelection('TRAVEL')}>TRAVEL</button>
      <button className="selectionButtons" onClick={()=>setSelection('FRIENDS')}>FRIENDS</button>
    </div>
  );
}

export default Buttons;

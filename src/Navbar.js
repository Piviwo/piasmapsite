function Navbar({setNavigation}) {
  return (
<div className="navbar">
  <button className="navtextbox" onClick={()=>setNavigation('MAIN')}>HOME</button>
  <button className="navtextbox" onClick={()=>setNavigation('CONTACT')}>CONTACT</button>
</div> 
  );
}

export default Navbar;

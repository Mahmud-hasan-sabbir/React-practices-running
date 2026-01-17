

export default function EventDill({style}) {


 let clickOne = function clickOne(){

  alert('hione');


 }



  const clickTwo = (msg, id) => {
  alert(msg + " ID: " + id);
};

 
  return (
    <>
    <div style={style}>

   
      <h1>This is Event Dill page</h1>

      <button onClick={clickOne}>
        click one
      </button>

      <button onClick={() => clickTwo("Hello", 2)}>
        click two
      </button>

       </div>
    </>
  );
}

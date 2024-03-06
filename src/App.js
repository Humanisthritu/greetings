

function App() {
   
  let currDate = new Date().getHours();
  let greeting = '' ;
  let style ={
    color: " "
  }


  if(currDate >= 1 && currDate < 12){
    greeting = "Good Morning";
    style.color = "Green"
  }
  else if(currDate >= 12 && currDate < 18){
    greeting = "Good Afternoon";
    style.color = "Orange"
  }
  else{
    greeting = "Good Night";
    style.color = "Blue"
  }

  return (
   <>
   <div className="greeting">
    <h1>Hello Beautiful <span style={style}>{greeting}</span></h1>
    </div>
   </>
  );
}

export default App;

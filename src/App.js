import Schedual from './schedule.json'
import Main from './Main';


function App() {
  const data = Schedual;
  

  return (
      <>
         <Main data={data}/>
      </>
    );
}

export default App;

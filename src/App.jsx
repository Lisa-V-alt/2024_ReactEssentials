import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

//imported components used below.
  return (
    <>
    <Header/>
      <main>
      <CoreConcepts />
      <Examples />
      </main>
    </>
  );
}
export default App;

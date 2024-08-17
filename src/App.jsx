//react executes a component function only once, TabButton code is thus reevaluated using UseState
import {useState} from 'react'; //react hook

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

//useState hook (tells react that this component function must be executed again)
//constant, used repeatedly
function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');


  function handleSelect(selectedButton){
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

console.log('APP COMPONENT EXECUTING'); //logs in console, checks if buttons function (if state/hooks not operating)

//imported props used below.

  return (
    <div>
    <Header/>
      <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        <CoreConcept  //longer version (just as an example)
        title={ CORE_CONCEPTS[0].title }
        description={ CORE_CONCEPTS[0].description }
        image={ CORE_CONCEPTS[0].image }
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
      </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        {selectedTopic} {/*links to useState Array */}
      </section>
      </main>
    </div>
  );
}

export default App;

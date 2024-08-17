//react executes a component function only once, TabButton code is thus reevaluated using UseState
import {useState} from 'react'; //react hook

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from './data-with-examples.js';

//useState hook (tells react that this component function must be executed again)
//constant, used repeatedly
function App() {
  const [ selectedTopic, setSelectedTopic ] = useState(); //useState is empty, because initial state is 'no selected' tab


  function handleSelect(selectedButton){
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

console.log('APP COMPONENT EXECUTING'); //logs in console, checks if buttons function (if state/hooks not operating)

let tabContent = <p>Please select a topic.</p>;
//if topic is selected, render paragraph 'please select something...', else, render null:
if (selectedTopic){
  tabContent = (
  <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
  );
}

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
        {tabContent}
      </section>
      </main>
    </div>
  );
}
export default App;

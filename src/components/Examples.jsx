//react executes a component function only once, TabButton code is thus reevaluated using UseState
import {useState} from 'react'; //react hook
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import {EXAMPLES} from '../data.js'

export default function Examples(){
    //useState hook (tells react that this component function must be executed again)
    //constant, used repeatedly
    const [ selectedTopic, setSelectedTopic ] = useState(); //useState is empty, because initial state is unselected tab

    function handleSelect(selectedButton){
      //selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
      //console.log(selectedTopic);
    }

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

    return (
        <Section title="Examples" id="examples">
        <menu>
          <TabButton isSelected = {selectedTopic === 'components'} //links to TabButton.jsx, checks if tab is selected then indicates as such
          onClick={() => handleSelect('components')}
          >Components
          </TabButton>
          <TabButton isSelected = {selectedTopic === 'jsx'}
          onClick={() => handleSelect('jsx')}
          >JSX
          </TabButton>
          <TabButton isSelected = {selectedTopic === 'props'}
          onClick={() => handleSelect('props')}
          >Props
          </TabButton>
          <TabButton isSelected = {selectedTopic === 'state'}
          onClick={() => handleSelect('state')}
          >State
          </TabButton>
        </menu>
        {tabContent}
      </Section>
    )
}
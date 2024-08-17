import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts(){
    return(
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* this function executes once for every item in the array: */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        {/* former function structure:
        <CoreConcept  //longer version (just as an example)
        title={ CORE_CONCEPTS[0].title }
        description={ CORE_CONCEPTS[0].description }
        image={ CORE_CONCEPTS[0].image }
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> */}
      </ul>
      </section>
      );
}
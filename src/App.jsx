import {useState} from 'react';
import { CORE_CONCEPTS} from '../src/data-with-examples.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import {EXAMPLES} from '../src/data-with-examples.js';


function App() {
 const [selectedTopic, setSelectedTab] = useState();

  function handleSelect(Selectedbutton) {
        console.log(`You clicked the ${Selectedbutton} tab!`);
        setSelectedTab(Selectedbutton);
  }

  let tabContent = <p>Please select a topic to see an example.</p>;

  if (selectedTopic) {
    tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
 
  return (
    <div>
      <Header />
      <main>
        <section className="concepts" id="core-concepts">
          <h2>Core Concepts</h2>
          {/* <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul> */}

          <ul>
            {CORE_CONCEPTS.map((conceptItems) => (
              <CoreConcept key={conceptItems.title} {...conceptItems} />
            ))}
          </ul>
        </section>
        <section className="examples" id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActiveTab={selectedTopic === 'components'} onSelect={() => {handleSelect ('components')}}> Components</TabButton>
            <TabButton isActiveTab={selectedTopic === 'jsx'} onSelect={() => {handleSelect ('jsx')}}> JSX</TabButton>
            <TabButton isActiveTab={selectedTopic === 'props'} onSelect={() => {handleSelect ('props')}}> Props</TabButton>
            <TabButton isActiveTab={selectedTopic === 'state'} onSelect={() => {handleSelect ('state')}}> State</TabButton>
          </menu>

          {/* {!selectedTopic && <p>Please select a topic to see an example.</p>}

          {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;


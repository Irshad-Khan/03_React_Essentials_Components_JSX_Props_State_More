import {useState} from 'react'
import Header from './components/partials/Header';
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import { CORE_CONCEPT,Examples } from './data'

function App() {
  const [selectedTopic, setSelectedTopic] = useState("")
  const handleClick = (selectedText) => {setSelectedTopic(selectedText);}
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreConcept
              img={CORE_CONCEPT[0].image}
              title={CORE_CONCEPT[0].title}
              description={CORE_CONCEPT[0].description} />
            
            <CoreConcept
              img={CORE_CONCEPT[1].image}
              title={CORE_CONCEPT[1].title}
              description={CORE_CONCEPT[1].description} />
            
            <CoreConcept
              img={CORE_CONCEPT[2].image}
              title={CORE_CONCEPT[2].title}
              description={CORE_CONCEPT[2].description} />
            
            <CoreConcept
              img={CORE_CONCEPT[3].image}
              title={CORE_CONCEPT[3].title}
              description={CORE_CONCEPT[3].description} /> */}
            
            {CORE_CONCEPT.map((coreConcept, index) => <CoreConcept key={index} {...coreConcept}/>)}
            
            {/* <CoreConcept {...CORE_CONCEPT[0]}/>
            <CoreConcept {...CORE_CONCEPT[1]}/>
            <CoreConcept {...CORE_CONCEPT[2]}/>
            <CoreConcept {...CORE_CONCEPT[3]}/> */}
          </ul>
        </section>
        <section id='examples'> 
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={ () => handleClick('components') }>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={ () => handleClick('jsx') }>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={ () => handleClick('props') }>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={ () => handleClick('state') }>State </TabButton>
          </menu>
          { selectedTopic ?           <div id='tab-content'>
            <h3>{ Examples[selectedTopic].title }</h3>
            <p>{ Examples[selectedTopic].description }</p>
            <pre>
              <code>
                { Examples[selectedTopic].code }
              </code>
            </pre>
          </div> : "Please select Topic" }
        </section>
      </main>
    </div>
  );
}

export default App;

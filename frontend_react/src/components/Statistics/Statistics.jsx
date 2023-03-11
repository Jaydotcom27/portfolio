import { React, useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { client } from '../../client'
import { CgMore } from 'react-icons/cg'
import './Statistics.scss'
 
function Statistics() {
  const [ data, setData ] = useState([])

  const [ facts ] = useState(['You are looking at the letter distribution for all the fetched dynamic content across 48 documents and three schema types.', 
  'This distribution is nearly identical to what Samuel Morse (inventor of Morse code) got when identifying letter frequency to assign codes smartly.', 
  'In his analysis, the letter "E" was 56 times more common than the letter "Q." Within my information, you will find the letter "E" 249 times for each "Q."', 
  'A few common words dominate the frequency of letters in English text. Of the 100 most common words in the language, 36 contain the letter E.'])

  const [currentFact, setCurrentFact] = useState(0);

  const cycleFact = () => {
    const targetEl = document.getElementById('fact');
    targetEl.classList.add('hide');

    setTimeout(() => {
      targetEl.classList.add('show');
    }, 500)
    
    setTimeout(() => {
      if (currentFact === facts.length - 1) {
        setCurrentFact(0);
      } else {
        setCurrentFact(currentFact + 1)
      }
      targetEl.classList.remove('hide');
      targetEl.classList.remove('show');
    }, 500)
  };

  useEffect(() => {
    const query = '*[_type == "characters" && !(_id in path("drafts.**"))] | order(count desc)';
    client.fetch(query).then((data) => setData(data))
  }, [data])

  useEffect(() => {
    const targetEl = document.getElementById('fact');
    targetEl.innerText = facts[currentFact]
  }, [facts, currentFact])

  return (
    <div id='Statistics'>
        <div className='inner'>
            <BarChart
                width={360}
                height={200}
                data={data}
                barCategoryGap={1}
            >
                <XAxis dataKey="character" interval={0} tick={{ fill: 'white', fontSize: '10', fontWeight:'300' }} />
                <Bar dataKey="count" fill="white"  />
                <Tooltip contentStyle={{ backgroundColor: '#15181D', borderRadius: '10px', border: 'none', color: 'white' }}/>
            </BarChart>
            <div className='facts-container'>
                <span className='fact' id='fact'></span>
                <span
                  className='more'
                  onClick={() => cycleFact()}> <span>Tell me more</span> <CgMore />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Statistics
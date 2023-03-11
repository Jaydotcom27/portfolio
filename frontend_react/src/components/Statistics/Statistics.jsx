import { React, useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { client } from '../../client'
import './Statistics.scss'

// const data = [
//     {
//       character: 'a',
//       count: 56,
//     },
//     {
//       character: 'b',
//       count: 32,
//     },   
//     {
//       character: 'c',
//       count: 11,
//     },
//     {
//       character: 'd',
//       count: 23,
//     },
//     {
//       character: 'e',
//       count: 92,
//     },   
//     {
//       character: 'f',
//       count: 54,
//     },
//     {
//       character: 'g',
//       count: 12,
//     },
//     {
//       character: 'h',
//       count: 54,
//     },   
//     {
//       character: 'i',
//       count: 22,
//     },
//     {
//       character: 'j',
//       count: 15,
//     },
//     {
//       character: 'k',
//       count: 65,
//     },   
//     {
//       character: 'l',
//       count: 12,
//     },
//     {
//       character: 'm',
//       count: 23,
//     },
//     {
//       character: 'n',
//       count: 34,
//     },   
//     {
//       character: 'o',
//       count: 54,
//     },
//     {
//       character: 'p',
//       count: 43,
//     },
//     {
//       character: 'q',
//       count: 32,
//     },   
//     {
//       character: 'r',
//       count: 9,
//     },
//     {
//       character: 's',
//       count: 11,
//     },
//     {
//       character: 't',
//       count: 43,
//     },   
//     {
//       character: 'u',
//       count: 13,
//     },
//     {
//       character: 'v',
//       count: 32,
//     },
//     {
//       character: 'w',
//       count: 3,
//     },   
//     {
//       character: 'x',
//       count: 36,
//     },
//     {
//       character: 'y',
//       count: 9,
//     },
//     {
//       character: 'z',
//       count: 2,
//     }  
//   ];

function Statistics() {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const query = '*[_type == "characters" && !(_id in path("drafts.**"))] | order(character asc)';
    client.fetch(query).then((data) => setData(data))
  }, [data])

  return (
    <div id='Statistics'>
        <div className='inner'>
            <BarChart
                width={360}
                height={160}
                data={data}
            >
                <XAxis dataKey="character" tick={{ fill: 'white', fontSize: '10', fontWeight:'300' }} />
                <Bar dataKey="count" fill="white" />
                <Tooltip contentStyle={{ backgroundColor: '#15181D', borderRadius: '10px', border: 'none', color: 'white' }}/>
            </BarChart>
            <div className='facts-container'>
                <span className='fact'>
                    “The letter <span className='highlight'>e</span> is 56 times more common than the letter <span className='highlight'>q</span>”
                </span>
            </div>
        </div>
    </div>
  )
}

export default Statistics
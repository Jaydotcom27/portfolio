import React, { PureComponent } from 'react'
import './Statistics.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      letter: 'a',
      count: 56,
      amt: 300,
    },
    {
      letter: 'b',
      count: 32,
    },   
    {
      letter: 'c',
      count: 11,
    },
    {
      letter: 'd',
      count: 23,
    },
    {
      letter: 'e',
      count: 92,
    },   
    {
      letter: 'f',
      count: 54,
    },
    {
      letter: 'g',
      count: 12,
    },
    {
      letter: 'h',
      count: 54,
    },   
    {
      letter: 'i',
      count: 22,
    },
    {
      letter: 'j',
      count: 15,
    },
    {
      letter: 'k',
      count: 65,
    },   
    {
      letter: 'l',
      count: 12,
    },
    {
      letter: 'm',
      count: 23,
    },
    {
      letter: 'n',
      count: 34,
    },   
    {
      letter: 'o',
      count: 54,
    },
    {
      letter: 'p',
      count: 43,
    },
    {
      letter: 'q',
      count: 32,
    },   
    {
      letter: 'r',
      count: 9,
    },
    {
      letter: 's',
      count: 11,
    },
    {
      letter: 't',
      count: 43,
    },   
    {
      letter: 'u',
      count: 13,
    },
    {
      letter: 'v',
      count: 32,
    },
    {
      letter: 'w',
      count: 3,
    },   
    {
      letter: 'x',
      count: 36,
    },
    {
      letter: 'y',
      count: 9,
    },
    {
      letter: 'z',
      count: 2,
    }  
  ];

function Statistics() {
  return (
    <div id='Statistics'>
        <div className='inner'>
            <BarChart
                width={360}
                height={160}
                data={data}
            >
                <XAxis dataKey="letter" tick={{ fill: 'white', fontSize: '8', fontWeight:'300' }} />
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
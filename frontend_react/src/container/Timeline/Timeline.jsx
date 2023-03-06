import { React, useState, useEffect } from 'react';
import { Experience } from '../../components';
import { client } from '../../client'
import './Timeline.scss';

const Timeline = () => {
    const [ experiences, setExperiences ] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        client.fetch(query).then((data) => {
            data.sort((a, b) => {
                return a.rank - b.rank;
            })
            setExperiences(data)
        })
    }, [])

    return (
        <div id='Timeline'>
            <div className='timeline-inner'>
                {experiences.map((experience) => (
                    <Experience 
                        key = { experience._id }
                        title = { experience.title }
                        subtitle = { experience.subtitle }
                        content = { experience.content }
                        images = { experience.imageurls }
                    />
                ))}
            <a href='/portfolio'><span className='button'>See portfolio.</span></a>
            </div>
        </div>
    )
}

export default Timeline
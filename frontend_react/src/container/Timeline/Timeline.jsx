import { React, useState } from 'react'
import { Experience } from '../../components';
import './Timeline.scss'

const Timeline = () => {
    const [ experiences ] = useState([{
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        content: 'Content 1',
        images: ['url1','url2']

    },
    {
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        content: 'Content 2',
        images: ['url1','url2']

    },
    {
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        content: 'Content 3',
        images: ['url1','url2']

    }]);

    return (
        <div id='Timeline'>
            {experiences.map((experience) => (
                <Experience 
                    title = { experience.title }
                    subtitle = { experience.subtitle }
                    conent = { experience.content }
                    images = { experience.images }
                />
            ))}
        </div>
    )
}

export default Timeline
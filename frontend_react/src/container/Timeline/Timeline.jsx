import { React, useState } from 'react';
import { Experience } from '../../components';
import './Timeline.scss';

const Timeline = () => {
    const [ experiences ] = useState([{
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        images: ['https://i.imgur.com/CtktLNq.png']
    },
    {
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        images: ['https://i.imgur.com/CtktLNq.png','https://i.imgur.com/CtktLNq.png']
    },
    {
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        images: []
    },
    {
        title: 'Title 4',
        subtitle: 'Subtitle 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.',
        images: []
    },
    {
        title: 'Title 5',
        subtitle: 'Subtitle 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        images: []
    },
    {
        title: 'Title 6',
        subtitle: 'Subtitle 6',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        images: ['https://i.imgur.com/CtktLNq.png']
    },
    {
        title: 'Title 7',
        subtitle: 'Subtitle 7',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        images: ['https://i.imgur.com/CtktLNq.png', 'https://i.imgur.com/CtktLNq.png']
    }]);

    return (
        <div id='Timeline'>
            <div className='timeline-inner'>
                {experiences.map((experience) => (
                    <Experience 
                        key = { experience.title }
                        title = { experience.title }
                        subtitle = { experience.subtitle }
                        content = { experience.content }
                        images = { experience.images }
                    />
                ))}
            <a href='/portfolio'><span className='button'>See portfolio.</span></a>
            </div>
        </div>
    )
}

export default Timeline
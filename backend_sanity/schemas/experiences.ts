export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string' 
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string' 
        },
        {
            name: 'content',
            title: 'Content',
            type: 'string' 
        },
        {
            name: 'imageurls',
            title: 'ImgURLs',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'rank',
            title: 'Rank',
            type: 'number'
        }
    ],
    orderings: [
        {
            title: 'Rank, High',
            name: 'rankAsc',
            by: [
                {field: 'rank', direction: 'asc'}
            ]
        }
    ]
}
export default {
    name: 'items',
    title: 'Items',
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
            name: 'type',
            title: 'Type',
            type: 'string' 
        },  
        {
            name: 'content',
            title: 'Content',
            type: 'string' 
        },        
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'url',
            title: 'Url',
            type: 'string',
        },
    ]
}
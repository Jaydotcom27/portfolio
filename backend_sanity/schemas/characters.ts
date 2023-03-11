export default {
    name: 'characters',
    title: 'Characters',
    type: 'document',
    fields: [
        {
            name: 'character',
            title: 'Character',
            type: 'string' 
        },
        {
            name: 'count',
            title: 'Count',
            type: 'number' 
        }
    ],
    orderings: [
        {
            title: 'Count, High',
            name: 'countAsc',
            by: [
                {field: 'count', direction: 'asc'}
            ]
        }
    ]
}
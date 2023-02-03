export default {
    name: 'steps',
    title: 'Steps',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string' 
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string' 
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true, 
            } 
        },
    ]
}
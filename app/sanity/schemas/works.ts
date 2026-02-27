export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Use a number to sort (e.g., 1 for first, 2 for second, etc.)'
        },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'string' },
        { name: 'projectLink', title: 'Project Link', type: 'string' },
        { name: 'codeLink', title: 'Code Link', type: 'string' },
        { name: 'imgUrl', title: 'ImgUrl', type: 'image', options: { hotspot: true } },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ name: 'tag', title: 'Tag', type: 'string' }]
        },
    ],
}
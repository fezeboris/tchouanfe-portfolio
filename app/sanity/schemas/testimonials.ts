// export default {
//     name: 'testimonials',
//     title: 'Testimonials',
//     type: 'document',
//     fields: [
//         { name: 'name', title: 'Name', type: 'string' },
//         { name: 'company', title: 'Company', type: 'string' },
//         {
//             name: 'imageurl',
//             title: 'Image URL',
//             type: 'image',
//             options: { hotspot: true }
//         },
//         { name: 'feedback', title: 'Feedback', type: 'text' },
//     ]
// }


export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'company', title: 'Company', type: 'string' },
        { name: 'feedback', title: 'Feedback', type: 'text' },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            initialValue: false, // Important: New posts are hidden by default
            description: 'Check this to show the testimonial on the website'
        },
        { name: 'imageurl', title: 'Image', type: 'image', options: { hotspot: true } },
    ]
}
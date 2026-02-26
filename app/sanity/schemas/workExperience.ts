export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'object',
    fields: [
        { name: 'name', title: 'Job Title', type: 'string' },
        { name: 'company', title: 'Company', type: 'string' },
        { name: 'desc', title: 'Description', type: 'text' }, // using text for longer descriptions
    ]
}
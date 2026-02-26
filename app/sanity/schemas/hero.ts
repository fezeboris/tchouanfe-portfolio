export default {
    name: 'hero',
    title: 'Hero Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Your full name (e.g., Boris Tchouanfe)'
        },
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
            description: 'The big bold text (e.g., Building Digital Experiences)'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'The short bio under your name'
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'yearsExperience',
            title: 'Years of Experience',
            type: 'string',
        },
        {
            name: 'resume',
            title: 'Resume (PDF)',
            type: 'file',
            options: {
                accept: '.pdf' // Restrict to PDF files
            }
        },
    ],
}
import { defineField, defineType, validation } from "sanity"
export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.max(500),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields:[{
                name: 'alt',
                title: 'Alternative Text',
                type: 'string',
            }    
            ],
        }),
        defineField({
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'photo' } }],
        }),
    ]
})
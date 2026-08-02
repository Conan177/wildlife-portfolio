import { defineField, defineType } from "sanity"
export default defineType({
    name: 'photo',
    title: 'Photo',
    type: 'document',
    icon: () => '📸',
    fields:[
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
            name: 'image',
            title: 'File Image',
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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shopifyHandle',
            title: 'Shopify Product Handle',
            description: 'Copia qui lo slug del prodotto Shopify (es. "lupo-nella-neve-stampa")',
            type: 'string',
            validation: (Rule) => Rule.required().custom(handle => {
                if (handle && handle.includes(' ')) return 'L\'handle non può contenere spazi';
                return true;
            }),
        }),
        defineField({
            name: 'exif',
            title: 'Technical Details (EXIF)',
            type: 'object',
            fields: [
                { name: 'camera', type: 'string', title: 'Corpo Macchina' },
        { name: 'lens', type: 'string', title: 'Obiettivo' },
        { name: 'iso', type: 'string', title: 'ISO' },
        { name: 'shutterSpeed', type: 'string', title: 'Tempo di scatto' },
        { name: 'aperture', type: 'string', title: 'Diaframma' },
            ]
        }),
        defineField({
            name: 'description',
            title: 'Storia dello scatto',
            type: 'text',
        }),
    ]
})
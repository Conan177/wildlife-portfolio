import { defineField, defineType } from "sanity"

export default defineType({
    name: 'info',
    title: 'Info',
    type: 'document',
    icon: () => 'ℹ️',
    fields: [
        defineField({
            name: 'quote',
            title: 'Citazione',
            type: 'string',
        }),
        defineField({
            name: 'bioExtended',
            title: 'Bio estesa',
            description: 'Ogni elemento è un paragrafo separato',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'backstagePhotos',
            title: 'Foto backstage',
            description: 'Foto di te mentre scatti — appaiono nel carosello',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'photo' } }],
        }),
    ]
})
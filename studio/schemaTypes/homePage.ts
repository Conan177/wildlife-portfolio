import { defineField, defineType } from "sanity"

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => '🏠',
    fields: [
        defineField({
            name: 'photos',
            title: 'Foto in evidenza',
            description: 'Scegli le foto da mostrare in home e ordinale a piacere',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'photo' } }],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: { title: 'photos.0.title' },
        prepare() {
            return { title: 'Home Page' }
        }
    }
})
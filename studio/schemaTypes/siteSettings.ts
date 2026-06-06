// sanity/schemas/siteSettings.ts
import { defineField, defineType } from "sanity"

export default defineType({
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  // Icona che appare nella sidebar di Sanity Studio
  icon: () => '⚙️',
  fields: [

    // ── Identità ──────────────────────────────────────────
    defineField({
      name: 'photographerName',
      title: 'Nome e Cognome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'tagline',
      title: 'Tagline (sotto il nome nella navbar)',
      description: 'Es. "Naturalist & Explorer"',
      type: 'string',
    }),

    defineField({
      name: 'yearsOfExperience',
      title: 'Anni di esperienza (badge)',
      type: 'number',
    }),

    defineField({
      name: 'baseCity',
      title: 'Città / Base operativa',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email di contatto',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram (solo username, senza @)',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn (solo username)',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook (solo username)',
      type: 'string',
    }),

    // ── Ritratto ──────────────────────────────────────────
    defineField({
      name: 'portrait',
      title: 'Foto del fotografo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Testo alternativo',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ── Bio (sezione About) ───────────────────────────────
    defineField({
      name: 'bioHeading',
      title: 'Titolo sezione About',
      description: 'Es. "Racconto la natura come pochi la vedono"',
      type: 'string',
    }),

    defineField({
      name: 'bioHeadingEm',
      title: 'Parte in corsivo del titolo (em)',
      description: 'Es. "come pochi la vedono" — verrà mostrata in corsivo dorato',
      type: 'string',
    }),

    defineField({
      name: 'bio',
      title: 'Bio — paragrafi',
      description: 'Ogni elemento è un paragrafo separato',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule) => Rule.required().min(1),
    }),

    // ── SEO / meta ────────────────────────────────────────
    defineField({
      name: 'siteDescription',
      title: 'Meta description del sito',
      type: 'text',
      rows: 2,
    }),

  ],

  // Impedisce di creare più di un documento di questo tipo
  // tramite la __experimental_actions di Sanity (opzionale ma consigliato)
  preview: {
    select: { title: 'photographerName' },
    prepare({ title }) {
      return { title: title ?? 'Impostazioni Sito' }
    },
  },
})
import { defineField, defineType } from 'sanity';

export const gig = defineType({
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date & Time',
      type: 'datetime',
      options: { dateFormat: 'YYYY-MM-DD', timeFormat: 'HH:mm' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'E.g. "with the Amadeus Wedberg Trio"',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket / Event Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'venue',
      subtitle: 'date',
      description: 'city',
    },
    prepare({ title, subtitle, description }) {
      const date = subtitle
        ? new Date(subtitle).toLocaleDateString('sv-SE')
        : 'No date';
      return { title, subtitle: `${date} — ${description ?? ''}` };
    },
  },
  orderings: [
    {
      title: 'Date, Ascending',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
});

import { defineField, defineType } from 'sanity';

export const galleryPhoto = defineType({
  name: 'galleryPhoto',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional. Shown on hover.',
    }),
    defineField({
      name: 'date',
      title: 'Date Taken',
      type: 'date',
      description: 'Used for ordering. Newest first.',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
      subtitle: 'date',
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title ?? 'Untitled photo',
        subtitle: subtitle ?? '',
        media,
      };
    },
  },
});

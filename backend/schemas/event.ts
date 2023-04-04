import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'description',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
          type: 'object',
          name: 'dateAndTime',
          title: 'Date and Time',
          fields: [
            {
              type: 'datetime',
              name: 'startDateTime',
              title: 'Start Date and Time',
            },
            {
              type: 'datetime',
              name: 'endDateTime',
              title: 'End Date and Time',
            },
          ],
        }),
    defineField({
      name: 'location',
      type: 'object',
      title: 'Location',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Name',
        }),
        defineField({
          name: 'address',
          type: 'string',
          title: 'Address',
        }),
        defineField({
          name: 'city',
          type: 'string',
          title: 'City',
        }),
        defineField({
          name: 'state',
          type: 'string',
          title: 'State/Province',
        }),
        defineField({
          name: 'country',
          type: 'string',
          title: 'Country',
        }),
      ],
      // validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'registrationLink',
      type: 'url',
      title: 'Registration Link',
    }),
    defineField({
      name: 'poster',
      type: 'image',
      title: 'Poster',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'speakers',
      type: 'array',
      title: 'Speakers',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
            }),
            defineField({
              name: 'bio',
              type: 'text',
              title: 'Bio',
            }),
            defineField({
              name: 'photo',
              type: 'image',
              title: 'Photo',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'sponsors',
      type: 'array',
      title: 'Sponsors',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
            }),
            defineField({
              name: 'logo',
              type: 'image',
              title: 'Logo',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'link',
              type: 'url',
              title: 'Link',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})


import { defineField, defineType } from "sanity";

export const habitatType = defineType({
  name: 'habitat',
  title: 'Habitat',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField(
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }),
  ]
})
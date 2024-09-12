import { defineField, defineType } from "sanity";

export const dinosaurGroupType = defineType({
  name: 'dinosaurGroup',
  title: 'Dinosaur Group',
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
    defineField({
      name: 'icon',
      title: 'Group Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})
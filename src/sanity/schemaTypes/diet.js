import { defineField, defineType } from "sanity";

export const dietType = defineType({
  name: 'diet',
  title: 'Diet',
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
  ]
})
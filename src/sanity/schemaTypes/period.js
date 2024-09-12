import { defineField, defineType } from "sanity";

export const periodType = defineType({
  name: 'period',
  title: 'Geological Period',
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
      name: 'startDate',
      title: 'Start Date (millions of years ago)',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'endDate',
      title: 'End Date (millions of years ago)',
      type: 'number',
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
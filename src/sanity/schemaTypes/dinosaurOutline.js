import { defineField, defineType } from "sanity";

export const dinosaurOutlineType = defineType({
  name: 'dinosaurOutline',
  title: 'Dinosaur Outline',
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
      name: 'svgPaths',
      title: 'SVG Paths',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'path',
              title: 'SVG Path',
              type: 'text',
              validation: Rule => Rule.required()
            },
            {
              name: 'strokeWidth',
              title: 'Stroke Width',
              type: 'number',
              initialValue: 2
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'viewBox',
      title: 'SVG ViewBox',
      type: 'string',
      initialValue: '0 0 800 600',
      validation: Rule => Rule.required()
    })
  ]
})
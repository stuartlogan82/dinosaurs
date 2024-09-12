import { defineField, defineType } from "sanity";

export const locationType = defineType({
  name: 'location',
  title: 'Location',
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
        name: 'continent',
        title: 'Continent',
        type: 'string',
        options: {
          list: [
            {title: 'Africa', value: 'africa'},
            {title: 'Antarctica', value: 'antarctica'},
            {title: 'Asia', value: 'asia'},
            {title: 'Europe', value: 'europe'},
            {title: 'North America', value: 'north-america'},
            {title: 'South America', value: 'south-america'},
            {title: 'Australia', value: 'australia'}
          ]
        },
        validation: Rule => Rule.required()
      }
    ),
    defineField(
      {
        name: 'coordinates',
        title: 'Coordinates',
        type: 'geopoint'
      },
    ),
    defineField(
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
  ]
})
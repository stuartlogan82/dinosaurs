import { defineField, defineType } from "sanity";
import { GiDinosaurBones } from "react-icons/gi";

export const dinosaurType = defineType({
  name: 'dinosaur',
  title: 'Dinosaur',
  icon: GiDinosaurBones,
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
      name: 'scientificName',
      title: 'Scientific Name',
      type: 'string'
    }),
    defineField(
    {
      name: 'period',
      title: 'Geological Period',
      type: 'reference',
      to: [{type: 'period'}]
    }),
    defineField(
    {
      name: 'diet',
      title: 'Diet',
      type: 'reference',
      to: [{type: 'diet'}]
    }),
    defineField(
    {
      name: 'habitat',
      title: 'Habitat',
      type: 'reference',
      to: [{type: 'habitat'}]
    }),
    defineField(
    {
      name: 'group',
      title: 'Dinosaur Group',
      type: 'reference',
      to: [{type: 'dinosaurGroup'}]
    }),
    defineField(
    {
      name: 'length',
      title: 'Length (in meters)',
      type: 'number'
    }),
    defineField(
    {
      name: 'weight',
      title: 'Weight (in tons)',
      type: 'number'
    }),
    defineField(
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField(
    {
      name: 'funFact',
      title: 'Fun Fact',
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
    defineField({
      name: 'youtubeLink',
      title: 'YouTube Link',
      type: 'url',
      description: 'Add a YouTube link for the dinosaur sound',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https'],
        allowRelative: false
      })
    }),
  ]
})
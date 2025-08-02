import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'epicpomona',

  projectId: 'y0wjf689',
  dataset: 'dataset-test',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

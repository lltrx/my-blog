import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myTheme} from './theme'
import StudioNavBar from './components/utils/StudioNavBar'
import {getDefaultDocumentNode} from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Tu_blog_studio',
  title: 'Tu blog studio',
  projectId,
  dataset,
  plugins: [deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavBar,
    }
  },
  theme: myTheme,
})


import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'icwizg5v',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'estudio-flores-vera',
  deployment: {
    appId: 'o5s3le02qzgzv5o48cyg668k',
  },
})
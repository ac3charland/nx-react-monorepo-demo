import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run nx-react-monorepo-demo:serve',
        production: 'nx run nx-react-monorepo-demo:preview',
      },
      ciWebServerCommand: 'nx run nx-react-monorepo-demo:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

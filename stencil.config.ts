import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'textwatch',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    sass({ indentedSyntax: true })
  ]
};

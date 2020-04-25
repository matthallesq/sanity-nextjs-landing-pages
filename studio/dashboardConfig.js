export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea388e25418c32b2d1d7207',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-we6kjo86',
                  apiId: '09869cc0-6dad-461a-96d6-dd04fcf961df'
                },
                {
                  buildHookId: '5ea388e2b83dec3c780c406e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2suv3a5k',
                  apiId: '68cc8696-1dfa-4dc1-90c6-21ec594fd174'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthallesq/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2suv3a5k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

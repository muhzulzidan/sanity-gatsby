export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60954cdd5c531382bdaf8ca7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9ryv27ya',
                  apiId: 'b39be9ab-15c8-4902-952c-752a484edf9c'
                },
                {
                  buildHookId: '60954cdd8ffba65fea00ff8c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-81k3fmjx',
                  apiId: 'fb870a23-9c3e-4517-abd4-94c8298b2c0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TechieRider/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-81k3fmjx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

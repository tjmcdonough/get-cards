export default {
  editor: {
      label: {
          en: 'Make payment',
      },
  },
  properties: {
      access_token: {
          label: {
              en: 'Access token',
          },
          type: 'Variable',
          bindable: true,
          options: {
              types: ['String']
          }
      },
      server_url: {
        label: {
            en: 'The API Base URI',
        },
        type: 'Variable',
        bindable: true,
        options: {
            types: ['String'],
        },
    },
    relative_url: {
        label: {
            en: 'The Relative API URI',
        },
        type: 'Variable',
        bindable: true,
        options: {
            types: ['String'],
        },
    },
    success_value: {
        label: {
            en: 'The returned response',
        },
        type: 'Variable',
        bindable: true,
        options: {
            types: ['Object']
        }
    }
  }
};

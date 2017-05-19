module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'a perfect-paca project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  skipInterpolation: "**/*.vue",
  completeMessage: '{{#inPlace}}see https://github.com/phlogisticfugu/perfect-paca to get started{{/inPlace}}'
};

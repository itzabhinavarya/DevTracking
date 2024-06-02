module.exports = {
    // Your existing ESLint configuration goes here
  
    // Override rules based on process.env.CI
    overrides: [
      {
        files: ['**/*.js'], // Specify the files you want to apply this override to
        env: {
          node: true, // Set node environment to true for Node.js specific configurations
        },
        rules: {
          // Example rule
          'example-rule': process.env.CI ? 'off' : 'warn', // Disable the rule if process.env.CI is true, otherwise set it to warning
        },
      },
    ],
  };
  
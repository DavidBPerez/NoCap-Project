const serverURL = process.env.NODE_ENV === 'production'
  ? 'https://nocap-project.ethanpeeler.repl.co'
  : '';  // Empty string for local development

export default serverURL;

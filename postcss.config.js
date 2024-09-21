const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    // A plugin that does not require configuration:
    'postcss-import',

    // Tailwind CSS with nesting
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',

    // PurgeCSS configuration
    process.env.NODE_ENV === 'production'
      ? purgecss({
          content: ['./**/*.html'],
        })
      : false,
  ],
}

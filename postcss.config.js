module.exports = {
  plugins: [
    'postcss-import',

    // Tailwind CSS plugins:
    'tailwindcss/nesting',
    'tailwindcss',
    'autoprefixer',

    // PurgeCSS plugin only in production:
    [
      '@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
            content: ['./**/*.html'],
          }
        : false,
    ],
  ],
}

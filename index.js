const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const html = (await (await fetch('https://github.com' + req.url)).text())
    .replace(/(href=.)https?:\/\/github.com/g, '$1//' + req.headers.host)
    .replace(
      '</head>',
      `<link media="all" rel="stylesheet" href="/styles.css" />
      ${req.query.dark !== undefined ? '<link media="all" rel="stylesheet" href="/dark.css" />' : ''}
      `
    )

  res.end(html)
}

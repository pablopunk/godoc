const fetch = require('node-fetch')

module.exports = async (req, res) => {
  console.log(req.url)
  const githubRes = await fetch(`https://github.com${req.url}`)
  const html = (await githubRes.text())
    .replace(
      '</head>',
      `<link media="all" rel="stylesheet" href="/styles.css" />
      ${req.query.dark !== undefined ? '<link media="all" rel="stylesheet" href="/dark.css" />' : ''}`
    )

  res.end(html)
}

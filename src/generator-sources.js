const {resolve} = require("path");

module.exports = [
  {
    name: "github.com",
    url: "https://github.com",
    strict: true,
    file: resolve(__dirname, "../src/main.css"),
  },
  {
    name: "github-mobile",
    url: "https://github.com/StylishThemes/GitHub-Dark/pull/1",
    prefix: `body[class="page-responsive"]`,
    match: ["body", ".page-responsive"],
    fetchOpts: {headers: {"User-Agent": "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/82.0.3904.87 Mobile Safari/537.36"}},
    strict: true,
    file: resolve(__dirname, "../src/main.css"),
  },
  {
    name: "gist.github.com",
    url: "https://gist.github.com",
    strict: true,
    file: resolve(__dirname, "../src/main.css"),
  },
  {
    name: "docs.github.com",
    url: "https://docs.github.com",
    file: resolve(__dirname, "../src/docs.css"),
  },
  {
    name: "developer.github.com",
    url: "https://developer.github.com",
    file: resolve(__dirname, "../src/developer.css"),
  },
  {
    name: "graphql.github.com",
    url: "https://graphql.github.com/", // https://developer.github.com/v4/explorer
    file: resolve(__dirname, "../src/graphql.css"),
  },
  {
    name: "support.github.com",
    url: "https://support.github.com",
    file: resolve(__dirname, "../src/support.css"),
  },
  {
    name: "vscode-auth.github.com",
    url: "https://vscode-auth.github.com",
    file: resolve(__dirname, "../src/vscode-auth.css"),
  },
  {
    name: "githubstatus.com",
    url: "https://www.githubstatus.com",
    file: resolve(__dirname, "../src/status.css"),
  },
  {
    name: "render.githubusercontent.com",
    url: [
      "https://render.githubusercontent.com/view/pdf?enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f74706e2f706466732f623037326638386234633836303762343561303866386236393331633037313630623462316466382f41253230436f75727365253230696e2532304d616368696e652532304c6561726e696e672532302863696d6c2d76305f392d616c6c292e706466",
      "https://render.githubusercontent.com/diff/img?commit=0fabf58a4b0a00d048d06113a063738afb674ed7&enc_url1=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f5374796c6973685468656d65732f4769744875622d4461726b2f306661626635386134623061303064303438643036313133613036333733386166623637346564372f696d616765732f73637265656e73686f74732f6265666f72652e706e67&enc_url2=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f5374796c6973685468656d65732f4769744875622d4461726b2f613434323536373337663932303861633263393435613266633561633133666562343536336262332f696d616765732f73637265656e73686f74732f6265666f72652e706e67",
    ],
    file: resolve(__dirname, "../src/render.css"),
  },
];

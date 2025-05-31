require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "dhupack",
  "id": 138458963,
  "node_id": "U_kgDOCEC3Uw",
  "avatar_url": "https://avatars.githubusercontent.com/u/138458963?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/dhupack",
  "html_url": "https://github.com/dhupack",
  "followers_url": "https://api.github.com/users/dhupack/followers",
  "following_url": "https://api.github.com/users/dhupack/following{/other_user}",
  "gists_url": "https://api.github.com/users/dhupack/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/dhupack/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/dhupack/subscriptions",
  "organizations_url": "https://api.github.com/users/dhupack/orgs",
  "repos_url": "https://api.github.com/users/dhupack/repos",
  "events_url": "https://api.github.com/users/dhupack/events{/privacy}",
  "received_events_url": "https://api.github.com/users/dhupack/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-03T09:41:46Z",
  "updated_at": "2025-05-31T06:12:17Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('dhupack')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

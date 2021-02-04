---
title: "How I created my gatsby personal website"
tags: ["gatsby", "personal", "website"]
description: "How to create a gatsby website"
author: "Sudara Ranasinghe"
date: "2020-02-03"
---

1. Create a GitHub repo called *sudara999.github.io* </p>

2. Copy the template project:
```jsx
gatsby new sudaradev [https://github.com/surudhb/gatsby-personal-site-template](https://github.com/surudhb/gatsby-personal-site-template)
``` 
</p>

3. Set up the remote repo to track your local repo </p>

4. Change the details in the *gatsby-config.js* file. </p>

5. Create an npm script to deploy the website. When the script is executed, the website is built and the resulting build-files are pushed into a branch named *gh-pages* on the remote repo. Edit the *package.json* file as follows:
```jsx
{
  ...
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "deploy": "gatsby build && gh-pages -d public",
	...
}
```
</p>

6. Change the settings in the GitHub repo to serve the website from the *gh-pages* branch. </p>

7. If you bought a domain, set the domain to redirect to the GitHub pages URL. I would recommend using a CNAME host record so that the URL displayed in the browser would not change. When using the CNAME host record for a domain, set the custom domain field in the GitHub settings for the repo accordingly. </p>

8. Run the deploy script!
```jsx
npm run deploy
```
Your website should be published now.

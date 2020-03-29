# perfect-paca

DEPRECATED

see [suf-stack-aws-koa-nuxt](https://github.com/suf-stack/generator-suf-stack-aws-koa-nuxt) [npm](https://www.npmjs.com/package/generator-suf-stack-aws-koa-nuxt)

---

Vue.js template/boilerplate for universal web apps with a dedicated backend.
Running via serverless framework on AWS Lambda

This project uses [nuxt.js](https://nuxtjs.org/), a [vue.js](https://vuejs.org/) framework
for building web applications which render pages on initial page load server-side as HTML,
for speed and SEO-optimization, then later load other pages client-side like a single-page app.
This is then served up through [Express](https://expressjs.com/) as a [ServerLess](https://serverless.com/)
function, so that it can be deployed in an automatically scaled and low-maintenance manner.

As a dedicated backend environment is often required for rendering security-sensitive code, a `/api`
path is setup to handle Express routes for server-side code.  Credentials should then be configured
within the AWS Console as environment variables protected by AWS KMS.

Within the universal nuxt.js application, external calls can be made
via the axios universal http client.

# Installation

Install global command line functions
```bash
npm install -g vue-cli
npm install -g serverless
```

Create a project using the template
```bash
vue init phlogisticfugu/perfect-paca <project-name>
cd <project-name>
yarn --ignore-engines install
```

Do local development
```bash
npm run dev
```

Do local development using node 6.10 to simulate cloud-hosted environment
```bash
nvm use 6.10.3
AWS_EXECUTION_ENV=nodejs6.10 npm run dev
```

Deploy to a cloud-hosted development environment
```bash
npm run deploy-dev

# after the initial run, one can subsequently use:
npm run deploy-dev-fast
```

When everything looks good, deploy to production
```bash
npm run deploy-prod
```

Then setup a domain with a CNAME record pointing to the URL which returns from the above command.

# SAML.to Self Hosted

This is the [Serverless](https://serverless.com) application to deploy and run SAML.to in any AWS Account.

It consists of two core APIs:

- The `auth-sls-rest-api`: The Authentication backend, which creates handles GitHub Login and App Installation events.
- The `github-sls-rest-api`: The GitHub backend, which handles SAML Requests and Respones using GitHub Tokens.

⚠️ Before getting started, please message [`accounts@saml.to`](mailto:accounts@saml.to) with your AWS Account ID so we can grant access to the Lambda Layers referenced in [serverless.yml](./serverless.yml).

# Getting Started

1. [Use This Template](https://github.com/new?template_name=self-hosted&template_owner=saml-to) to create this repository in your own GitHub Account or Organization
1. Follow the [Installation Instructions](./INSTALLATION.md) to deploy the Application to your AWS Account.

# Deploying

1. Navigate to GitHub Actions for this Project
1. Find the `Deploy` GitHub Action
1. Click `Run Workflow`

## Accessing API Docs

1. After Deploying you can observe the `endpoints` of the Service in the GitHub Actions Summary
   1. `auth-sls-rest-api`: `https://somerandomid.execute-api.us-east-1.amazonaws.com/nonlive/auth`
   1. `github-sls-rest-api`: `https://hoxumplysi.execute-api.us-east-1.amazonaws.com/nonlive/github`
1. You can visit Swagger OpenAPI docs by adding `/swagger.html` to the URLs
   1. `auth-sls-rest-api`: `https://somerandomid.execute-api.us-east-1.amazonaws.com/nonlive/auth/swagger.html`
   1. `github-sls-rest-api`: `https://somerandomid.execute-api.us-east-1.amazonaws.com/nonlive/github/swagger.html`

## Upgrading Versions

SAML.to uses Semantic Versioning for the Lambda Layers referenced in [serverless.yml](./serverless.yml). Please email [`accounts@saml.to`](mailto:accounts@saml.to) to be informed of new releases.

1. Edit `package.json`
1. Within the `layers` property, update the desired versions for:
   1. `github-sls-rest-api`
   1. `auth-sls-rest-api`

# Maintainers

- [SAML.to](https://saml.to)
- [@cnuss](https://github.com/cnuss)
- [Scaffoldly](https://github.com/scaffoldly)

# Terms of Use

By using this repository, you agree to the [LICENSE](./LICENSE) and [Terms of Use](https://saml.to/terms).

# License

[BUSL-1.1](./LICENSE)

Copyright 2024 SAML.to (a subsidiary of Scaffoldly LLC)

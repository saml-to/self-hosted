# SAML.to Self Hosted Installation

## AWS IAM RBAC

### GitHub Identity Provider

1. Provider URL: `https://token.actions.githubusercontent.com`
1. Audience: `sts.amazonaws.com`

### AWS IAM Role

Trust Relationship:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::123456123456:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:saml-to/self-hosted:*"
        },
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        }
      }
    }
  ]
}
```

## GitHub App

1. Create a GitHub App
1. Set Homepage URL
1. Set Callback URL
1. Enable Request user authorization (OAuth) during installation
1. Enable Device Flow
1. Set Webhook URL
1. Set Webhook Secret
1. Set Repository Permissions
   1. Repo Admin R/W?
   1. Webhooks R/W?
   1. Single File: saml-to.yml
1. Set Organization Permissions
   1. Members R/O
1. Set Member Permssions
   1. Email Addresses R/O
1. Set Events
   1. Member
   1. Meta
   1. Membership
   1. Organization
   1. Repository
   1. Team
   1. Team Add
1. Generate a Client Secret
   1. Copy into GitHub Secrets: NAME: TODO
1. Generate a Private Key
   1. Base64 Encode: `cat ~/Downloads/saml-to-self-hosted.2024-02-04.private-key.pem | base64`
   1. Copy into GitHub Secrets: NAME: TODO


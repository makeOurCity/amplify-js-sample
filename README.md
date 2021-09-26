# amplify sample

# Getting Started

Get `Cognito Info` from https://app.hamamatsu.makeour.city/

```console
$ cp .env.example .env  # copy a setting file
$ vi .env               # Add your username, password and Cognito Info
$ npm i                 # Install dependencies
```

```console
$ node index.mjs
idToken: xxxxxx
{
  'orionld version': 'post-v0.8.1',
  ...
}
```

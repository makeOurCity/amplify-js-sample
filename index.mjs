import { Amplify, API, Auth } from "aws-amplify";
import dotenv from "dotenv";

dotenv.config();

// see also https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js

Amplify.configure({
  // OPTIONAL - if your API requires authentication
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: process.env.IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
    region: "ap-northeast-1",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: process.env.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "MyApi",
        endpoint: process.env.ORION_ENDPOINT,
      },
    ],
  },
});

const user = await Auth.signIn(process.env.USERNAME, process.env.PASSWORD);
const token = user.signInUserSession.idToken.jwtToken;
console.log(`idToken: ${token}`);
const myInit = {
  headers: {
    Authorization: token,
  },
};

API.get("MyApi", "/version", myInit).then((response) => {
  console.log(response);
});

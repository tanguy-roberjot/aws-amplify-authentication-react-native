<p align="center">
  <img src="./src/assets/logo.png" title="AwsAuth" alt="AwsAuth" height=150>
</p>

<h1 align="center">AWS Amplify Cognito Authentication React Native
</h1>

<h4 align="center">
  Complete AWS Cognito authentication flow boilerplate using amplify in react native, with redux login persist
</h4>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tanguy-roberjot/aws-amplify-authentication-react-native">
  
  <a href="https://github.com/tanguy-roberjot/aws-amplify-authentication-react-native/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tanguy-roberjot/aws-amplify-authentication-react-native">
  </a>

  <a href="https://github.com/tanguy-roberjot/aws-amplify-authentication-react-native/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/tanguy-roberjot/aws-amplify-authentication-react-native">
  </a>
 </p>

<img src="./github/mockup.png" title="AwsAuth" alt="AwsAuth">

---

## Installation


### Clone

- Clone this repo to your local machine using `https://github.com/tanguy-roberjot/aws-amplify-authentication-react-native.git`

### Setup


> install and configure the amplify CLI

```shell
$ npm install -g @aws-amplify/cli
$ amplify configure
```
> create your IAM User and fill your accessKeyId and secretAccessKey:

<img src="./github/1.png" title="AwsAuth" alt="AwsAuth">

> initialize amplify

```shell
$ amplify init
```
> answer the questions like this: 

<img src="./github/2.png" title="AwsAuth" alt="AwsAuth">

> add Authentication service to your amplify configuration 

```shell
$ amplify add auth
```
<img src="./github/2.png" title="AwsAuth" alt="AwsAuth">

> push your configuration to the cloud

```shell
$ amplify push
```

> you're ready to run the project

```shell
$ cd aws-amplify-authentication-react-native
$ yarn
$ react-native start
```
```shell
$ react-native run-android
or
$ react-native run-ios
```


## Contributing

> To get started...

### Step 1

- **Option 1**
    - Fork this repo!

- **Option 2**
    - Clone this repo to your local machine using `https://github.com/tanguy-roberjot/aws-amplify-authentication-react-native.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/tanguy-roberjot/aws-amplify-authentication-react-native/compare/" target="_blank">`https://github.com/tanguy-roberjot/aws-amplify-authentication-react-native/compare/`</a>.

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

# CV-Api-Proxy
This is a Proxy-Api (REST API with CRUD Operation) to call the [CV-Api](https://github.com/mdrijwan/cv-api)

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:mdrijwan/cv-api-proxy.git
```

If you use https, use this instead

```
git clone https://github.com/mdrijwan/cv-api-proxy.git
```

Run the command below to install NPM dependencies

```
npm install
```

Then compile the `TypeScript` files to `JavaScript`

```
npm run complie
```

Then start the server and visit [http://127.0.0.1:3001/](http://127.0.0.1:3001/) to see the app in action.

```
npm run start
```

>For the CRUD operation, [CV-Api](https://github.com/mdrijwan/cv-api) needs to be running in order to make this Proxy-Api to be working.

#### The CRUD operations

***Methods***
- GET/
  + GET/ `(to see my CV)`
  + GET/list `(to see the whole list of CVs)`
  + GET/cv/cvId `(to see a specific CV)`
 
- POST/
  + POST/add `(to create a CV)`
   
- PUT/
  + PUT/edit/cvId `(to update a CV)`
  
- DELETE/
  + DELETE/delete `(to delete the whole list of CVs)`
  + DELETE/delete/cvId `(to delete a specific CV)`

[![Build status](https://badge.buildkite.com/ce19a7b70b9eaaabfbb038e9c9e335866c20337d28e8e89c4d.svg)](https://buildkite.com/rr/cv-api-proxy)

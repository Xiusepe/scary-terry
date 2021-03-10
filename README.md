# scary-terry

## Front:

 - __parcel:__ that was risk I decided to take, finally a lot of configuration (babel,eslint,sass). That stoled me a lot of time and I run out of it to test it deployed.
- __typescript:__ finally I decided to go with my friend typescript, very good for the models and for state management.
- __axios:__ most familiar http API for React.
- __react-router-dom:__ most familiar router for React.
- __@reduxjs/toolkit:__ used to manually write redux slices with ts for epics. Nice impressions for toolkit + thunks.
- __clsx:__ I love it, very ligth, readable and useful for getting team agreement on dynamic classnames.
- __normalize:__ I prefer to not reinvent the reset.
- __prettier:__ I allways use prettier.

Also all the stuff for eslint and babel

## BackEnd:

- __bcrypt:__ used to encrypt the new user password.
- __body-parser:__ recommended for parsing all incoming requests bodies. 
- __cors:__ no need argumentation. 😬
- __cuid:__ for the creation of unique collision-resistant ID's.
- __dotenv:__ must for clean environment configuration, no time to set it up.
- __jsonwebtoken:__ library used for the creation and validation of JWT.
- __mongoose:__ I only know/use this api to interact with mongoDB.
- __morgan:__ nice middleware to log some info of the request in the console
- __validator:__ nice amount of utils to validate incoming stuff with readable patterns.
- __prettier:__ I allways use prettier.

Also all the stuff for eslint and babel

## How to start the whole projects:
- During the phase of deciding the architecture I decided to separate the frontend and the backend in different servers.
- I run out of time to decide the shape and the stack of the servers. To do something fast, probably I will deploy booth directly in a node container with express.
- The mongoDB probably I will used MongoDB cloud based Atlas.

Node environment used: node 12.21.0 npm 6.14.11

Front: 
- npm install (important to use my package.lock.json since the instability in parcel versioning)
- npm run dev

Backend:
- npm install
- npm run dev (a mongoDB DDBB is required)

Mongo DDBB:
- is required a DB running on http://localhost:27017.
- I installed the MongoDB community. 
- since there is no signup logic, a post to /signup with below json as body is required. Otherwise you will not be able to login in the front.

```json
{
  "email": "no-validation-be-free",
  "password": "no-validation-be-free"
}

```

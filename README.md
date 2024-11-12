# Documentation :

## Overview :

This project is an authentication and role management system ready to be implemented in any node project.
If you want more informations about the integrated features consult the [project sprints](sprints.md)

## Key Features:

### Secure Authentication:

Utilizing JWT for the generation and validation of authentication tokens, ensuring a secure exchange between the client and the server.

### Role Management:

Assignment of specific roles to users to define their access rights. This allows restricting access to resources based on the defined privileges.

### Robust Logging with Winston:

Implementation of a powerful logging system with Winston, enabling detailed tracking of activities, errors, and significant application events.

## Routes :

### Authentication routes :

#### Register :

`"/auth/register" : Create a new User in DB`

**Body format expected :**

```json
{
  "username": "john.doe", //unique
  "email": "john.doe@example.com", //unique
  "password": "password123"
}
```

#### Login :

`"/auth/login" : Return a authentication token`

**Body format expected :**

```json
{
  "username": "john.doe",
  "password": "password123"
}
```

**Response format :**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGMwZDQ2NTgzOWM1MTQ2ODZjYzZiYTAiLCJpYXQiOjE2MTkxMzcyNjAsImV4cCI6MTYxOTE0MDg2MH0.wJGkkTz27e_vyaxf1M85rMUPtNvXo25ntGtJgdy-aNk"
}
```

### Users routes :

_every user route go through the users middleware that check if the auth token is valid. If it is not valid it returns an error._

#### Profile :

`"/users/profile" : Return a user's informations`

**Required headers :**

`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQiOiI2MGMwZDQ2NTgzOWM1MTQ2ODZjYzZiYTAiLCJpYXQiOjE2MTkxMzcyNjAsImV4cCI6MTYxOTE0MDg2MH0.wJGkkTz27e_vyaxf1M85rMUPtNvXo25ntGtJgdy-aNk`

**Response format :**

```json
{
  "_id": "6597fc85738909dd242ddd84",
  "username": "john",
  "email": "john.doe@gmail.com",
  "password": "$2b$10$I9kCPPf0mVstZPsh8tU7xeQC6DXHXgHuTgkw9mAg43iXSbG3txXGa", //hashed password
  "role": "user",
  "createdAt": "2024-01-05T12:56:37.501Z",
  "updatedAt": "2024-01-05T12:56:37.501Z",
  "__v": 0
}
```

### Admins routes :

_Every admin route go first through the users middleware and then the admins middleware that check is the role oof the user is admin. If it is not it returns an error._

#### getUsers :

`"/admins/getUsers" : Return a list containing the first 20 users of the db`

**Required headers :**

`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VySWQiOiI2MGMwZDQ2NTgzOWM1MTQ2ODZjYzZiYTAiLCJpYXQiOjE2MTkxMzcyNjAsImV4cCI6MTYxOTE0MDg2MH0.wJGkkTz27e_vyaxf1M85rMUPtNvXo25ntGtJgdy-aNk`

**Response fromat :**

```json
[
  {
    "_id": "6597fc85738909dd242ddd84",
    "username": "john",
    "email": "john.doe@gmail.com",
    "password": "$2b$10$I9kCPPf0mVstZPsh8tU7xeQC6DXHXgHuTgkw9mAg43iXSbG3txXGa",
    "role": "user",
    "createdAt": "2024-01-05T12:56:37.501Z",
    "updatedAt": "2024-01-05T12:56:37.501Z",
    "__v": 0
  },
  {
    "_id": "65980890599ee8a2b680e6bb",
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "$2b$10$GS0AR1XS7dp2N3V.l85k5O2/9mIS8pmu3ZoX7kOzem4CePvS/7XZi",
    "role": "admin",
    "createdAt": "2024-01-05T13:48:00.527Z",
    "updatedAt": "2024-01-05T13:48:00.527Z",
    "__v": 0
  }
]
```

## How to test : 

server is hosted on this url : 

`https://node-auth-a2ym.onrender.com`




# features to integrate :

- ### First phase :

  - [x] Create a User model
  - [x] Implement a register route
    - [x] hash the password before saving user in db
  - [x] Implement a login route
    - [x] compare passwords
    - [x] Return a token to the client with the id of the user

- ### Second phase :

  - [x] Implement an Authentication middleware that check if the user is logged
    - [x] Get the tokken from the request headers
    - [x] Verify the tokken
    - [x] Manage invalid token and expired ones
    - [x] If user is logged get UserId from the decodedToken
    - [x] Get user infos from the db and store it in request.user to let it available in the next middleware
    - [x] If user is not logged return an error

- ### Third phase :

  - [x] Implement an Admins middleware that allow access to admins routes
    - [x] Get the user from request.user
    - [x] if the user is admin next
    - [x] if the user is not admin return an error 403

- ### Fourth phase :
  - implement a logger system:
    - [x] create a logger
    - [x] Implement a console transport
    - [x] Implement a fs transport
    - [x] Rotate files every X days
    - [x] create an error structure that contains all the metaData needed in the logs
    - [x] handle uncaughtExceptions and uncaughtRejections
    - [x] store logs in a centralized service
- ### Fifth phase :
  - [x] write a documentation
  - [x] host it
  - [x] GOT IT !


# To Do CRUD operation

In this project we worked on making the basic codes of a full To Do list CRUD opration, plus registration & loging in.
There's two roles for registration:

- Admin.
- User.

  both roles can create, read, update and delete their own added Tasks.
  Whats differante about this project is that Admins can see all Users data (<ins>user data</ins> **_not_** tasks) and can also Delete any user using the UserId.

# Project UML Diagram
![Untitled Diagram drawio (4)](https://user-images.githubusercontent.com/92247858/145250714-2ed8491d-5301-4c9e-88d5-2826e07353bf.png)

# Project ER Diagram
![Untitled Diagram drawio](https://user-images.githubusercontent.com/92247858/145216470-4411ebdc-5657-43e0-aee6-8d4e492e2950.png)


# Registration & login Authentication

This project will help you set the basic steps for authenticating users securely useing:

- json web token
- bcrypt.

# Cloneing this repostry

First thing you need to do is clone this repository to use it as a base to bulid the rest of your project on:

`git clone https://github.com/ShahadAltuwijry/W08D02.git`

# Starting & Downloading main packages

after cloning the repository, you have to download the packages used in this project, by pasting this in your terminal:

`npm i `

_already have your own schemas and just need the Authenticating part? you only need to:_

## Download needed packages for Hashing & Authenticating

- Downloading bcrypt:
  `npm i bycrypt`

- Downloading json web token:
  `npm i jsonwebtoken`

# Documentation that might help you

- [express js docs](https://expressjs.com/)
- [dotenv docs](https://www.npmjs.com/package/dotenv)
- [mongoose ](https://www.npmjs.com/package/mongoose)
- [bcrypt docs](https://www.npmjs.com/package/bcrypt)
- [json web token docs](https://www.npmjs.com/package/jsonwebtoken)

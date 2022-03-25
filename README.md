# EShop Project

This project is a single-page, ecommerce-store, web-application with a React frontend and Node.JS backend, MongoDB NoSQL database.

It is the graduation project of the Fullstack Web Developer course at ITSafe college.

## Features: 
1. User Database - Login and registeration with encrypted passwords in a NoSQL database.
2. User Authentication - Using JWT for storing cookies with a lifetime of 24 hours and assuring requests are verified.
3. Payment Proccess.
4. Seven views - Homepage (Dynamically displays items loaded from database), login, register, account, cart, payment and logout, all being single-page web application.


## To-dos:
1. Change input types of date and card at Payment
2. Finish the account view.
3. Update history on client upon purchase.


## Used Libraries

1. React
2. Bootstrap
3. Axios
4. Express
5. JWT
6. Mongoose / MongoDB
7. Bcrypt
8. Cors


## IMPORTANT:
1. I indexed the email row of the user database for faster access, that's why it's OK not to use the email with search, but if you don't index the email row you should use the id for faster track.
2. You MUST follow the setup instructions in order for it to work.

## Setup Instructions

* Set up a MongoDB database or have access to a cloud based one.

* Set up a default.json file and name two parameters:
1. mongoURI - A URI for a MongoDB based database.
2. secret - a secret key for the encyption.


> Author: Shahar Duany
> Contact shahar.duany@gmail.com for assistance

# EShop Project

This project is a single-page ecommerce-shop with a React front and Node.js back, MongoDB NoSQL database.

## Features:
This project is a fully built and functioning store web application with the following features: 
1. User Database - Login and registeration with encrypted passwords in a NoSQL database.
2. User Authentication - Using JWT for storing cookies with a lifetime of 24 hours and assuring requests are verified.
3. Payment Proccess.
4. Seven views - Homepage (Dynamically displays items loaded from database), login, register, account, cart, payment and logout, all being single-page web application.

## To-dos:
1. Adjust the bug at AddCart - reset the amount.
2. Remove alerts from Payment + change input types of date and card
3. Finish the account view.
4. Add date field at the checkout for more pleasent look.

## IMPORTANT:
1. I used an index on the email row of the user database for faster access, that's why it's OK not to use an index
2. You MUST follow the setup instructions in order for it to work.

## Setup Instructions

* Set up a MongoDB database or have access to a cloud based one

* Set up a default.json file and name two parameters:
1. mongoURI - A URI for a MongoDB based database
2. secret - a secret key for the express

## Used Libraries

1. React
2. Bootstrap
3. Axios
4. Express
5. JWT
6. Mongoose / MongoDB
7. Bcrypt


> Author: Shahar Duany
> Contact shahar.duany@gmail.com for assistance

# auth
Authorization API w/ Node + Express + PostgreSQL

## Use: Nodejs and express server to create an API with the following:

## Sign up a user with their email address, name (not unique), and a password
## Sign in, given a json web token to use in other apis

## User can create groups each with a name (not unique)
## User can add other users to groups by their email address
## User can view the groups they created, but only the groups they created, along with the users in those groups. If the user in the group has created an account,       include their name.

## For simplicity, consider anything with a @ sign and at least one character before and after it a valid email address.

## Use postgresql to store the data.

## Do not use an ORM, create the schema yourself with an accompanying .sql file to generate it.

## Please provide some simple docs for your API, a readme on how to get up and running, and an estimate of how long you spent on this. The documentation can just be     a simple text file.

## Add any notes of things you would add in a prod environment but doesnt seem necessary here such as email validation that actually works.
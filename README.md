# Backend API Documentation

## `POST /users/register`

### Description
Registers a new user account in the sy stem.

### Request Body
The endpoint expects JSON data with the following fields:

- `fullname` (object)
  - `firstname` (string, required) - Minimum 3 characters
  - `lastname` (string, optional) - Minimum 3 characters if provided
- `email` (string, required) - Unique user email address
- `password` (string, required) - User password

Example request body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "StrongPassword123"
}
```

### Responses

- `201 Created`
  - Description: User successfully registered.
  - Response body contains the created user object and a JWT token.
  - Example response:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "_id": "644f9f9f9f9f9f9f9f9f9f9f",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```

- `400 Bad Request`
  - Description: Validation failed or required fields are missing.
  - Response body contains validation error details.

- `500 Internal Server Error`
  - Description: Server error while processing the request.

### Notes
- Passwords are hashed before being stored.
- The `email` field must be unique for each user.
- The response does not return the raw password.

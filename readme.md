## CRM Client API

- This API is a part of CRM Ticket system - [Frontend Github Repo](https://github.com/vaibhav18matere/crm-client)

## How to use

- run `git clone https://github.com/vaibhav18matere/crm-client-api.git`
- run `npm install`
- run `npm start`

Note: Make sure you have [nodemon](https://www.npmjs.com/package/nodemon) installed.

## API Resources

### 1. User API Resources

| #   | Routers                   | Action | Is Private | Description                                      |
| --- | ------------------------- | ------ | ---------- | ------------------------------------------------ |
| 1   | `/v1/user`                | GET    | Yes        | Get user Info                                    |
| 2   | `/v1/user`                | POST   | No         | Create a user                                    |
| 3   | `/v1/user/login`          | POST   | No         | Verify user Authentication and return JWT        |
| 4   | `/v1/user/reset-password` | POST   | No         | Verify email and email pin to reset the password |
| 5   | `/v1/user/reset-password` | PATCH  | No         | Replace with new password                        |
| 6   | `/v1/user/logout`         | DELETE | Yes        | Delete user accessJWT                            |

### 2. Ticket API Resources

| #   | Routers                        | Action | Is Private | Description                             |
| --- | ------------------------------ | ------ | ---------- | --------------------------------------- |
| 1   | `/v1/ticket`                   | GET    | Yes        | Get all ticket for the logined in user  |
| 2   | `/v1/ticket/{id}`              | GET    | Yes        | Get a ticket details                    |
| 3   | `/v1/ticket`                   | POST   | Yes        | Create a new ticket                     |
| 4   | `/v1/ticket/{id}`              | PUT    | Yes        | Update ticket details ie. reply message |
| 5   | `/v1/ticket/close-ticket/{id}` | PATCH  | Yes        | Update ticket status to close           |
| 6   | `/v1/ticket/{id}`              | DELET  | Yes        | Delete a ticket                         |

### 3. Tokens API Resources

| #   | Routers      | Action | Is Private | Description            |
| --- | ------------ | ------ | ---------- | ---------------------- |
| 1   | `/v1/tokens` | GET    | No         | Get a fresh access JWT |



# Nosh 
Nosh Bank API is a simple banking service for interacting.
<br/>
API Docs: https://documenter.getpostman.com/view/28806235/2s9Xy2NBXf

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
<!-- 
## Demo

You can try out the live demo of Anony-Memo at [https://your-demo-url.com](https://your-demo-url.com). -->

## Features

- Create Account using Phone numbers.
- Transfer funds across different accounts with different currencies.
- Deposit to account
- Withdraw from account
- View past transactions
- Recieve mails about transactions
<!-- - Responsive and user-friendly interface. -->

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis [Cache]
- JWT (JSON Web Tokens) for authentication
- EventEmiiter2 (for event/listenr management)

<!-- - HTML, CSS, and JavaScript (Frontend) -->

## Installation

To run Anony-Memo locally, follow these steps:

## 1. Clone the repository:

```bash
git clone https://github.com/tdadadavid/bank.git bank
cd bank
```

## 2. Install the necessary dependencies:

```bash
npm install

```

## 3. Add your .env file:

```bash

NODE_ENV=development
PORT=4000

# DATABASE
DATABASE_STRING='your db string'
# DATABASE_USER=root

# REDIS/CACHE
REDIS_HOST='Your redis host'
REDIS_PORT='Your redis port'
REDIS_PASSWORD='redis password'
REDIS_TTL='Globa time to live'

# TOKENS
ACCESS_TOKEN_SECRET='crazy secret'
ACCESS_TOKEN_SECRET_LIFE_SPAN='timeline'

REFRESH_TOKEN_SECRET='crazy secret'
REFRESH_TOKEN_SECRET_LIFE_SPAN='timeline'

# EXCHANGE RATES 
FIXER_API_KEY='exchange rate api key'

```

## 4. Start The Server:

```bash
npm run start:dev

```

## 6. Via Docker 
```bash
    docker run dockerrundavid/nosh:v1

    localhost:8080/v1.nosh/health
```

## 7. Via Kubernetes 
```bash
    coming soon
```

## 5. Test On Postman:

```bash
https://documenter.getpostman.com/view/28806235/2s9Xy2NBXf
```

# Documentation Stunting API

## Installation

Berikut ini langkah-langkah dalam menjalankan project  `bisnis-api`
Clone repo bisnis-api:

```bash
git clone https://github.com/mohamilin/bisnis-api
cd bisnis-ap
```

Install dependencies:

```bash
npm install
```

Set environment variables:

```bash
cp .env.example .env
```
buka .env kemudian modifikasi environment:
```bash
// mode development
NODE_ENV=development

DB_NAME_DEV=
DB_USERNAME_DEV=
DB_PASSWORD_DEV=
DB_PORT=3306
DB_HOSTNAME_DEV=localhost

PORT=8080

JWT_SECRET=
JWT_ACCESS_EXPIRATION_MINUTES=
JWT_REFRESH_EXPIRATION_DAYS=
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=

TOKEN_TYPE_REFRESH=refresh
TOKEN_TYPE_ACCESS=access
TOKEN_TYPE_RESET_PASSWORD=resetPassword
TOKEN_TYPE_VERIFY_EMAIL=verifyEmail
```

## API Documentation
Berikut ini list dari APIs untuk menjalankannya. Pastikan server / project dalam keadaan running (default `port` : `8080`) dan `http://localhost:8080`.

### API Documentation 

1. Download Postman Collection [Download]( Bisnis%20-%20Api.postman_collection.json "download")
2. Download Postman Environment [Download]( Bisnis%20-%20API.postman_environment.json "download")

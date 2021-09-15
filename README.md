
# url-shortener

Created to reduce that stress of having a long URL to your site

## API Reference

#### Get all items

```http
  POST /api/url/shorten
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `defaultUrl` | `string` | **Required**. URL to be shortened |

#### Get item

```http
  GET /redirect/${code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. code to redirect  |



Takes a long url and returns the shortened url.

  
## Documentation

[Url shortener](https://documenter.getpostman.com/view/17357328/U16onhqj)

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URI`

`BASE_URI`
## Authors

- [@St80ene](https://github.com/St80ene)

  
## Demo

Insert gif or link to demo

  
## Deployment

To deploy this project run

```bash
  Not yet deployed
```

  
## Run Locally

Clone the project

```bash
  git clone git@github.com:St80ene/url-shortener.git
```

Go to the project directory

```bash
  cd url-shortener
```

Install dependencies

```bash
  npm install
```

Start the production server

```bash
  npm run start
```

Start the development server

```bash
  npm run dev
```
## Tech Stack


**Server:** 
- nodeJs 
- express
- mongoose
- validUrl
- Nodemon
- mongoDB
- cors
- morgan
- shortid
- dotenv

  

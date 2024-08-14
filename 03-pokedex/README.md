<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone repository
2. Execute
```
yarn install
```
3. To have Nest CLI Installed

```
npm i -@nestjs/cli
```
4. Run Database

```
docker-compose up -d
```

5. clone file __.env.template__, and rename the copy to __.env__

6. Fill environment variables defined at __.env__

7. Execute app en dev mode 
```
yarn run start:dev
```
8. Rebuild Databasewith seed

```
http:localhost:3000/api/v2/seed
```
## Used Stack

* MongoDB
* Nest



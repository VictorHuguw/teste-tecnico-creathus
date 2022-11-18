## Tecnologias utilizadas e motivo

* Node: 18.12.1 

Foi utilizado nodejs no backend pela facilidade de organização e estruturação que a ferramenta nos dá além de ter a possibilidade de estarmos utilizando um ORM tão robusto como o sequelize e também a utilização de migrations 


Dependencias utilizadas

```
Package                         Version
---------------------------------------------------------
 "cors":                        "^2.8.5",
 "express":                     "^4.18.2",
 "multer":                      "^1.4.5-lts.1",
 "mysql2":                      "^2.3.3",
 "nodemon":                     "^2.0.20",
 "sequelize":                   "^6.25.6"
```

## Pré requisitos 

1 - Nodejs

```
https://nodejs.org/en/
```

2 - Banco de dados Mysql e Mysql workbench

```
https://dev.mysql.com/downloads/installer/
```

## Rodando servidor backend

Para executar o projeto backend basta executar os comandos abaixo dentro da pasta raiz do projeto backend creathus-movie-backend

1 - Instalando dependencias
```
npm install
```
2 - Criando banco de dados mysql
```
npx sequelize-cli db:create
```
3 - Executando migrations 
```
npx sequelize-cli db:migrate
```
4 - Rodando servidor
```
npm run start
```

Após executar os comandos o servidor será levantado no seguinte endereço

https://localhost:4000


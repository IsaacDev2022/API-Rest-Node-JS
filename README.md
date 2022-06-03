# API-Rest-Node-JS

<div>
    <img src="https://user-images.githubusercontent.com/56280877/171879215-8378d5c3-8a66-4ee1-9b7c-a81112afd615.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171880723-dc5096fb-09bf-48a8-9dc4-da6294a4cf1b.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171881825-3294c91a-c0eb-4035-ace9-843bd1384b54.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171883262-7b673571-5240-4e7e-9335-79e34068b75d.png" width="100px" />
</div> <br><br>

<p> Esse é um projeto de API simples feita em Node JS, usando como base os vídeos do canal Rodrigo Branas. O projeto foi feito utilizando o Node JS, Express, NPM e PostgreSQL para a persistencia dos dados. </p>
<p> A nossa API é composta por cinco camadas camadas simples, todas em formato de diretórios com nomenclaturas bem definidas: </p>
<ul>
    <li> <b> Infra: </b> responsável pela conexão com banco de dados PostgreSQL. </li>
    <li> <b> Data: </b> camada que realiza todas as queries de crud no banco de dados e as retorna. </li>
    <li> <b> Service: </b> camada de modelo de negócios, que faz ligação entre o middleware da aplicação e a camada de dados. </li>
    <li> <b> Route: </b> responsável por estabelecer as rotas da aplicação, receber as requisições feitas para essas rotas e tratá-las devidamente. </li>
    <li> <b> Test: </b> como o projeto foi feito utilizando a técnica TDD, esse repositório é responsável pelo desenvolvimento e aplicação dos testes para, posteriormente, desenvolvermos a aplicação em si. </li>
</ul>

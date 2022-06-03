# API-Rest-Node-JS

<div>
    <img src="https://user-images.githubusercontent.com/56280877/171879215-8378d5c3-8a66-4ee1-9b7c-a81112afd615.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171881825-3294c91a-c0eb-4035-ace9-843bd1384b54.png" width="300px" />
</div>

<p> Esse é um projeto de API simples feita em Node JS, usando como base os vídeos do canal Rodrigo Branas. O projeto foi feito utilizando o Node JS, Express, NPM e PostgreSQL para a persistencia dos dados. Para o desenvolvimento geral, foi utilizada a técnica TDD (Test-driven developmente) em que realizamos ciclos curtos de repetições baseadas em testes criados previamente e, logo após a execução desses mesmos testes, criamos o código-fonte relacionado ao que os testes apontaram. </p>
<p> A nossa API é composta por cinco camadas camadas simples, todas em formato de diretórios com nomenclaturas bem definidas: </p>
<ul>
    <li> <b> Infra: </b> responsável pela conexão com banco de dados PostgreSQL. </li>
    <li> <b> Data: </b> camada que realiza todas as queries de crud no banco de dados e as retorna. </li>
    <li> <b> Service: </b> camada de modelo de negócios, que faz ligação entre o middleware da aplicação e a camada de dados. </li>
    <li> <b> Route: </b> responsável por estabelecer as rotas da aplicação, receber as requisições feitas para essas rotas e tratá-las devidamente. </li>
    <li> <b> Test: </b> como o projeto foi feito utilizando a técnica TDD, esse repositório é responsável pelo desenvolvimento e aplicação dos testes para, posteriormente, desenvolvermos a aplicação em si. </li>
</ul>

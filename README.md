<div>
    <img src="https://user-images.githubusercontent.com/56280877/171879215-8378d5c3-8a66-4ee1-9b7c-a81112afd615.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171880723-dc5096fb-09bf-48a8-9dc4-da6294a4cf1b.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171881825-3294c91a-c0eb-4035-ace9-843bd1384b54.png" width="200px" />
    <img src="https://user-images.githubusercontent.com/56280877/171883262-7b673571-5240-4e7e-9335-79e34068b75d.png" width="100px" />
</div> <br><br>

# API Rest em Node JS

<p> Esse é um projeto de API simples feita em Node JS, usando como base os vídeos do canal Rodrigo Branas. O projeto foi feito utilizando o Node JS, Express, NPM e PostgreSQL. A API é composta por cinco camadas camadas simples, todas em formato de diretórios com nomenclaturas bem definidas: </p>
<ul>
    <li> <b> Infra: </b> responsável pela conexão com banco de dados PostgreSQL. </li>
    <li> <b> Data: </b> camada que realiza todas as queries de crud no banco de dados e as retorna. </li>
    <li> <b> Service: </b> camada de modelo de negócios, que faz ligação entre o middleware da aplicação e a camada de dados. </li>
    <li> <b> Route: </b> responsável por estabelecer as rotas da aplicação, receber as requisições feitas para essas rotas e tratá-las devidamente. </li>
    <li> <b> Test: </b> como o projeto foi feito utilizando a técnica TDD, esse repositório é responsável pelo desenvolvimento e aplicação dos testes para, posteriormente, desenvolvermos a aplicação em si. </li>
</ul>

<hr>

<p>  Para o desenvolvimento geral, foi utilizada a técnica TDD (Test-driven developmente) em que realizamos ciclos curtos de repetições baseadas em testes criados previamente e, logo após a execução desses mesmos testes, criamos o código-fonte relacionado ao que os testes apontaram. </p>
<p> Segue abaixo uma imagem do funcionamento dessa técnica de desenvolvimento: </p>
<div>
    <img src="https://user-images.githubusercontent.com/56280877/171883956-3dc52a51-cab2-4780-860c-4b4fcbc942e0.png" width="300px"  height="300"/>
</div>
<br>
<p> Segue abaixo o link para a playlist do projeto: </p>
<a href="https://www.youtube.com/watch?v=yZifRUvxdAk&list=PLQCmSnNFVYnQ28Gd7SmWiM-dChqaWiy8i"> API Rest com Node, JS, Express, PostgreSQL e Jest </a>
<br><br>

## Ferramentas para a execução do projeto:

<p> Para que o projeto seja executado corretamente, é necessário ter o NPM e o Node JS instalados na máquina. Caso esteja no Windows, o download pode ser feito através dos sites oficiais dos frameworks. Caso esteja no Linux, o download deverá ser feito via terminal, pode ser tanto pelo NPM quanto pelo Yarn, caso seja de sua preferencia. </p>

<p> Tutorial para a instalação do Node JS e NPM no Linux: </p>
<a href="https://balta.io/blog/node-npm-instalacao-configuracao-e-primeiros-passos"> Node e NPM - Instalação, Configuração e Primeiros Passos </a> <br><br>

<p> Para a persistencia de dados, foi utilizado o banco PostgreSQL, cujo qual o tutorial de instalação para o sistema Linux está logo abaixo: </p>
<a href="https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart-pt"> Como instalar o PostgreSQL no Ubuntu 20.04 </a> 
<br><br>

## Para iniciar o projeto:

<p> O primeiro passo para executar o projeto é fazer o git clone na sua máquina, e logo após esse processo, é necessário instalar as dependencias do Node JS na máquina, usando o comando: </p>

```
npm install
```
<br>
<p> Com o projeto já clonado na sua máquina e com as dependencias incluídas, é necessário que seja feito o restore do arquivo de banco de dados no PostgreSQL, o arquivo se encontra no diretório database. Após isso, podemos realizar o start do projeto usando o comando: </p>

```
npm start
```
<br>
<p> Dessa forma, o projeto estará rodando perfeitamente na porta 3333. </p> <br>

## Execução de testes:

<p> Para a criação e manutenção dos testes, utilizamos a ferramenta Jest JS, um framework em Javascript que tem como foco a criação de testes de forma simples e objetiva. </p>

<p> Instalação do Jest JS via NPM: </p>

```
npm install jest
```
<br>
<p> Com a ferramenta já instalada, usamos o comando a baixo para executarmos os testes, que estão no diretório test: </p> 

```
npm test
```
<br>
<p> Com o comando acima, todos os testes serão executados simultaneamente, o que pode gerar certa confusão no começo. Para que um único teste seja executado de forma individual, devemos alterar o código fonto do arquivo de testes, inserindo only na frente do comando test, como é feito abaixo: </p>

```javascript
test.only("Should get posts", async function () {
    // Códigos
})
```
<br>

## Versionamento:

<p> No momento, o projeto possui apenas uma versão. </p>

## Autores:

* **Isaac Silva Martins / IsaacDev2022** 

## Licença:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


  

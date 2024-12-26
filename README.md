# Feroz's Portfolio Projects - [ferozfaiz.com](https://ferozfaiz.com)

### Introduction

Welcome to my portfolio project, showcased at [ferozfaiz.com](https://ferozfaz.com). It has different segments, each demonstrating a distinct feature of my work in web and software development.

### Project Summaries

1. [**Spring Boot API**](https://github.com/nartix/spring-boot-api)

   - I developed this Spring Boot API for use with a Next.js application that’s currently under development. The API relies on PostgreSQL as the primary database, is secured through OpenID Connect, and leverages Hashicorp Vault for secret management. The application is deployed on a self-managed Kubernetes cluster. A live version is available at [spring-boot-api.ferozfaiz.com](https://spring-boot-api.ferozfaiz.com)

1. [**Django**](https://github.com/nartix/django-blog)

   - I developed ferozfaiz.com using Django, focusing on a fully server-side rendered architecture. To enhance interactivity and reactivity, I integrated HTMX and AlpineJS. Additionally, I implemented OAuth 2.0 authentication, supporting both Google and Microsoft. I used RabbitMQ/Celery to send emails. Kakfa was used to ship logs to ElasticSearch/Grafana. I also used Hashicorp Vault to store secrets. The application is deployed on Kubernetes. A live version is available at [ferozfaiz.com](https://ferozfaiz.com)

2. [**ReactJS UI**](https://github.com/nartix/reactjs-ui):

   - This repository highlights my work with ReactJS 18.2 and Redux. This ReactJS project is a web application that allows users to create, read, update, delete, sort, and search data. A live version is available at [reactjs.ferozfaiz.com](https://reactjs.ferozfaiz.com)

3. [**Angular UI**](https://github.com/nartix/angular-ui):

   - This directory contains the developement codes of Angular 16.2, a structural framework for dynamic web apps. This Angular project is a web application that allows users to perform the same CRUD operations as the ReactJS app. A live version is available at [angular.ferozfaiz.com](https://angular.ferozfaiz.com)

4. [**@nartix/tiptap-inline-code-highlight**](https://github.com/nartix/tiptap-inline-code-highlight):

   - This npm package I created is a port of @tiptap/extension-code-block-lowlight, but it's for highlighting inline codes in the TipTap editor. It uses Lowlight to highlight codes.

5. [**ExpressJS API**](https://github.com/nartix/expressjs-api):

   - This ExpressJS project is an API that ReactJS and Angular use to enable users to perform CRUD operations. A live version is available at [expressjs.ferozfaiz.com](https://expressjs.ferozfaiz.com)

6. [**Python And Django**](https://github.com/nartix/feroz/tree/main/python):

   - I also learned Django and developed an API backend with Django Rest Framework 3.14. This was designed to parallel the functionality of the existing ExpressJS API backend of ferozfaiz.com. A live version is available at [django-rest-framework.ferozfaiz.com](https://django-rest-framework.ferozfaiz.com)

7. [**Ansible-Kubernetes**](https://github.com/nartix/feroz/tree/main/ansible-kubernetes):

   - This directory shows how I use Ansible for automation and orchestration, along with Kubernetes for container orchestration. I deployed the portfolio project website using the RKE2 kubernetes engine.

8. [**HAProxy**](https://github.com/nartix/feroz/tree/main/haproxy):

   - This section is dedicated to HAProxy, a high-availability load balancer and proxy server for TCP and HTTP applications. I used HAProxy to load balance traffic between Kubernetes nodes.

9. [**Kubernetes**](https://github.com/nartix/feroz/tree/main/kubernetes):

   - Within this directory, you'll find the Kubernetes deployment manifests that I utilized for deploying ferozfaiz.com.

10. [**Shell-PostgreSQL-Docker**](https://github.com/nartix/feroz/tree/main/shell-postgresql-docker):

   - This section features shell scripts I developed for backing up and restoring a PostgreSQL cluster from an AWS S3 bucket

11. [**Github Actions**](https://github.com/nartix/feroz/tree/main/.github/workflows):

   - I've utilized GitHub Actions to streamline the automation of my deployment containers' build process, as well as the subsequent pushing of the built containers to AWS ECR

12. Development
   - For my portfolio projects, I employed Docker containers in conjunction with Docker Compose for development and testing. Utilizing Docker containers simplifies the process of experimenting with various technology versions seamlessly. Additionally, I leveraged Git for efficient version control

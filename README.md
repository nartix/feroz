# Feroz's Portfolio Projects - [ferozfaiz.com](https://ferozfaiz.com)

### Introduction

Welcome to my portfolio, showcased at [ferozfaiz.com](https://ferozfaz.com). It has different segments, each demonstrating a distinct feature of my work in web and software development.

### Project Summaries

1. [**Spring Boot API**](https://github.com/nartix/spring-boot-api)

   - I developed this Spring Boot API, relying on PostgreSQL as the primary database. It is secured through OpenID Connect, leverages Hashicorp Vault for secret management, and is deployed on a self-managed Kubernetes cluster. Additionally, I designed and implemented a [materialized path](https://github.com/nartix/spring-boot-api/tree/main/src/main/java/com/ferozfaiz/common/tree) data hierarchy for use with Spring Data JPA. I also implemented an Entity-Attribute-Value (EAV) model for a product catalog ([see EAV implementation](https://github.com/nartix/spring-boot-api/tree/main/src/main/java/com/ferozfaiz/product)). A live version is available at [spring-boot-api.ferozfaiz.com](https://spring-boot-api.ferozfaiz.com)

2. [**Next.js UI**](https://github.com/nartix/nextjs-ui)

   - This is a modern Next.js UI application designed to interface with a Spring Boot API for product data, utilizing the Entity-Attribute-Value (EAV) model. The UI is built with TypeScript, Tailwind CSS, and leverages a modular monorepo structure. Authentication and authorization are implemented using a custom solution, and several in-house packages are integrated for enhanced security, CSRF protection, middleware chaining, and form building. The application is deployed on a self-managed Kubernetes cluster for scalability and reliability. A live version is available at [nextjs.ferozfaiz.com](https://nextjs.ferozfaiz.com)

3. [**Django Blog**](https://github.com/nartix/django-blog)

   - I developed ferozfaiz.com using Django, focusing on a fully server-side rendered architecture. To enhance interactivity and reactivity, I integrated HTMX and AlpineJS. Additionally, I implemented OAuth 2.0 authentication, supporting both Google and Microsoft. I used RabbitMQ/Celery to send emails. Kakfa was used to ship logs to ElasticSearch/Grafana. I also used Hashicorp Vault to store secrets. The application is deployed on Kubernetes. A live version is available at [ferozfaiz.com](https://ferozfaiz.com)

4. [**ReactJS UI**](https://github.com/nartix/reactjs-ui):

   - This repository highlights my work with ReactJS 18.2 and Redux. This ReactJS project is a web application that allows users to create, read, update, delete, sort, and search data. A live version is available at [reactjs.ferozfaiz.com](https://reactjs.ferozfaiz.com)

5. [**Angular UI**](https://github.com/nartix/angular-ui):

   - This directory contains the developement codes of Angular 16.2, a structural framework for dynamic web apps. This Angular project is a web application that allows users to perform the same CRUD operations as the ReactJS app. A live version is available at [angular.ferozfaiz.com](https://angular.ferozfaiz.com)

6. [**@nartix/tiptap-inline-code-highlight**](https://github.com/nartix/tiptap-inline-code-highlight):

   - This npm package I created is a port of @tiptap/extension-code-block-lowlight, but it's for highlighting inline codes in the TipTap editor. It uses Lowlight to highlight codes.

7. [**@nartix/next-csrf**](https://www.npmjs.com/package/@nartix/next-csrf):

   - A lightweight CSRF protection middleware for Next.js on the Edge Runtime. It performs a **double check** on the CSRF token by comparing the token from the request body or headers with the token stored in the cookie.

8. [**@nartix/edge-token**](https://www.npmjs.com/package/@nartix/edge-token) ([GitHub](https://github.com/nartix/edge-token)):

   - A simple and secure token utility for generating and verifying tokens with optional data and timing. Edge Runtime compatible, making it ideal for use in serverless environments like Vercel Edge Functions, Cloudflare Workers, and other edge computing platforms.

9. [**ExpressJS API**](https://github.com/nartix/expressjs-api):

   - This ExpressJS project is an API that ReactJS and Angular use to enable users to perform CRUD operations. A live version is available at [expressjs.ferozfaiz.com](https://expressjs.ferozfaiz.com)

10. [**Django Rest Framework API**](https://github.com/nartix/django-rest-framework):

    - I also learned Django and developed an API backend with Django Rest Framework. This was designed to parallel the functionality of the existing ExpressJS API backend of ferozfaiz.com. A live version is available at [django-rest-framework.ferozfaiz.com](https://django-rest-framework.ferozfaiz.com)

11. [**Ansible Playbook**](https://github.com/nartix/ansible-playbook):

    - I use Ansible for automation and orchestration, along with Kubernetes for container orchestration. I deployed my portfolio projects using the RKE2 kubernetes engine.

12. [**HAProxy**](https://github.com/nartix/feroz/tree/main/haproxy):

    - This section is dedicated to HAProxy, a high-availability load balancer and proxy server for TCP and HTTP applications. I used HAProxy to load balance traffic between Kubernetes nodes.

13. [**Kubernetes**](https://github.com/nartix/feroz/tree/main/kubernetes):

    - Within this directory, you'll find the Kubernetes deployment manifests that I utilized for deploying ferozfaiz.com.

14. [**Shell-PostgreSQL-Docker**](https://github.com/nartix/feroz/tree/main/shell-postgresql-docker):

    - This section features shell scripts I developed for backing up and restoring a PostgreSQL cluster from an AWS S3 bucket

15. [**Github Actions**](https://github.com/nartix/feroz/tree/main/.github/workflows):

    - I've utilized GitHub Actions to streamline the automation of my deployment containers' build process, as well as the subsequent pushing of the built containers to AWS ECR

16. Development
    - For my portfolio projects, I employed Docker containers in conjunction with Docker Compose for development and testing. Utilizing Docker containers simplifies the process of experimenting with various technology versions seamlessly. Additionally, I leveraged Git for efficient version control

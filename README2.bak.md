# My Portfolio

## ReactJS Projects

### Rebuild a Service, Restart, and Remove Old Versions

To rebuild a service, restart it, and remove old versions, run the following command:

```bash
sudo docker-compose up -d --build reactjs-multi
```

### Stop and Remove a Single Docker Container

To stop and remove a specific Docker container, use this command:

```bash
docker-compose rm -s -v yourService
```

### Run ReactJS Inside a Docker Container

Execute the following command to run ReactJS inside a Docker container:

```bash
sudo docker exec -it reactjs sh
```

### Start a ReactJS Project or JSON Server

Navigate to your project folder and start your ReactJS project or JSON server with this command:

```bash
cd projectname; npm start
```

### Create a New ReactJS Project

To create a new ReactJS project, run the following command:

```bash
npx create-react-app project-name
```

### Create a New ExpressJS Project

Execute the following command to run ExpressJS inside a Docker container:

```bash
sudo docker compose up -d --build expressjs --remove-orphans
sudo docker exec -it expressjs sh
nodemon index.js
```

### Create a New Angular Project

Execute the following command to run ExpressJS inside a Docker container:

```bash
sudo docker compose up -d --build angularjs --remove-orphans
sudo docker exec -it angularjs sh
cd projectname
ng serve --host 0.0.0.0
```

### Set File Permissions for VSCode Editing

Change file permissions inside the Docker container to 777 to make them editable by Visual Studio Code:

```bash
chmod 777 -R project-name
```

### Terminate a Running Process

To kill a running process, use the following command:

```bash
kill -SIGTERM <PID>
```

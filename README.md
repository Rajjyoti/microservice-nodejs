# microservice-nodejs

* A simple application with post functionality.
* Implemented miscroservices architecture with event driven communication between the services.
* Dockerized the services and deployed them in a kubernetes cluster.


## Steps to run:

* run ```npm install``` in all the directories.
* build the docker images in all the servies using the dockerfiles provided ```docker build -t docker-user-name/service-name```
* go to infra/k8s directory and run ```kubectl apply -f filenames``` for all the files.
* run npm start in the client directory.

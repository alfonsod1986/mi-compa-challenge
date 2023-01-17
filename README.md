# Xmen API

![GonymizerLogo.png](./.images/X-Men-PNG-Transparent-HD-Photo.png)

* [Runnig with NPM](#npm-running)
* [Running with Docker](#docker-running)
* [Running with docker-compose](#docker-compose-running)
    * [With Mongodb Service](#docker-compose-with-mongodb-service)
    * [Without Mongodb service](#docker-compose-without-mongodb-service)
* [Running on Minikube](#minikube-running)
    * [Installing minikube](#minikube-installing)
    * [Helm Chart deployment](#helm-deploy)
    * [Terrafor deployment](#terrafor-deploy)

## NPM Running

You only need export **MONGO_URL** and **PORT** environment variables, install dependencies and and run **npm run start**:

```bash
export MONGO_URL=mongodb://<username>:<password>@<hostname>:<port>/<database>
export PORT=3000

npm install

npm run start
```

> **PORT** envar is not required, by default the server run on port 8080.

## Docker Running

1. Building images
```bash
docker build -t <image-name>:<tag> .
```
2. Runnning container
```
docker run --rm --name <container-name> -p 8080:8080 -e MONGO_URL=mongodb://<username>:<password>@<hostname>:<port>/<database> -d <image-name>:<tag>
```

## Docker Compose Running
#### With Mongodb Service

1. Docker Compose Build
```bash
docker-compose -f docker-compose.dev.yml build
```
2. Docker Compose Up
```bash
docker-compose -f docker-compose.dev.yml up
```

#### Without Mongodb Service
You only need to set **MONGO_URL** environment variable on **docker-compose.dev.nodb.yml** file and follow the steps in the previous section.

# Running on Minikube

#### Installing minikube
1. You can follow the next steps [here](https://minikube.sigs.k8s.io/docs/start/).

2. Install kubectl [here](https://kubernetes.io/docs/tasks/tools/).

3. Start minikube
```bash
minikube start
```

4. Checking cluster name with kubectl
```
kubectl cluster-info
```

#### Helm Chart deployment
1. Install helm [here](https://helm.sh/docs/intro/install/).

2. Deploying project on minikube with Helm
```bash
cd helm-charts/xmen-api
helm install <release-name> --namespace mi-compa --create-namespace .
```

> You need to check **values.yml** and set the correct value to **MONGO_URL**

3. Checking pods
```bash
kubectl get pods -n mi-compa
```

4. Expose service in your local machine
```bash
 kubectl port-forward <pod-name> -n mi-compa <machine-port>:<container-port>
```

#### Terraform deployment
1. Install Terraform [here](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

2. Deploying project on minikube with Terraform
```bash
cd terraform
terraform init
terraform apply
```

> Terraform will be asking for **MONGO_URL** value, you only put it on your prompt.
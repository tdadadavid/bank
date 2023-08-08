# Node App
 ***

## Start app
    * npm run start 
  
*** 
## Kubernetes & Minkube 
* Download Kubernetes ([here](https://kubernetes.io/docs/home/))
* Download Minikube ([here](https://kubernetes.io/docs/home/))
### Start Minikube
    * minikube start 
    * minikube start  --driver=docker 
### Check minikube status
    * minikube status
### Inspect or Get Minikube ip address
    * minikube ip 
    * kubectl get node -o wide
### Stop Minikube cluster
    * minikube stop 

*** 
### Steps to start application
    * kubectl apply -f mongo-config.yaml
    * kubectl apply -f mongo-secret.yaml
    * kubectl apply -f mongo.yaml
    * kubectl apply -f webapp.yaml


***
### Docker Image
* NodeApp: ([here](https://kubernetes.io/docs/home/))

*** 
### Useful kubernetes cli commands
    * kubectl get node
    * kubectl get pod
    * kubectl get svc
    * kubectl get all

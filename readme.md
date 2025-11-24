## To Validate Input in Express.js
https://www.digitalocean.com/community/tutorials/how-to-handle-form-inputs-efficiently-with-express-validator-in-express-js

## To Take POST request always use body-parser and in POSTMAN use raw json

## Question Regarding Docker not reflecting code changes
```
Use  CHOKIDAR_USEPOLLING: "true" 
CHOKIDAR_INTERVAL: "100"
It will check for code changes
http://stackoverflow.com/questions/44643045/running-development-server-with-create-react-app-inside-of-a-docker-container
Can lead to high cpu usage
```

## How to Push Image from cicd
```
uses: docker/login-action@v3
For Login Purpose

uses: docker/build-push-action@v4
To Build and Push Image
```


## How We will use AgroCD in our project?
```
1. Install ArgoCD in k8S Cluster
2. Configure ArgoCD with Application CRD
3. Test our setup by updating deployment.yaml
4. To get starting use this docs: https://argo-cd.readthedocs.io/en/stable/
```

## After Installing ArgoCD in k8S
```
1. Do Port Forwading 
kubectl port-forward -n argocd svc/argocd-server 6565:80

2. Get Password
kubectl -n argocd get secret argocd-admin-initial-password -o yaml

3. And Later decode it
echo <pasword> | base64 --decode
```
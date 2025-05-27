

```bash
    kubectl version --client
```
Output:
```bash
    Client Version: v1.32.2
    Kustomize Version: v5.5.0
```

create cluster using kind
```bash
kind create cluster
```


get cluster info
```bash
kubectl cluster-info
```

get nodes
```bash
kubectl get nodes
```

get pods
```bash
kubectl get pods
```

get services
```bash
kubectl get services
```

get deployments
```bash
kubectl get deployments
```

get replicasets
```bash
kubectl get replicasets
```

get statefulsets
```bash
kubectl get statefulsets
```

get daemonsets
```bash
kubectl get daemonsets
```


create a pod
```bash
kubectl run nginx --image=nginx
```

delete a pod
```bash
kubectl delete pod nginx
```

describe a pod
```bash
kubectl describe pod nginx
```

list all pods
```bash
kubectl get pods -o wide
```

list all pods with more details
```bash
kubectl get pods -o yaml
```

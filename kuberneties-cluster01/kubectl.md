

## Imperative way of creating a pod

create a pod
```bash
kubectl run --image=nginx nginx-pod
```

get pods
```bash
kubectl get pods
```

delete pods
```bash
kubectl delete pod nginx-pod
```

describe pods
```bash
kubectl describe pod nginx-pod
```

list all pods
```bash
kubectl get pods -o wide
```




## Generate YAML file
```bash
kubectl run nginx2 --image=nginx --dry-run=client -o yaml > pod2.yml
```

## Apply YAML file
```bash
kubectl apply -f pod2.yml
```

## Delete YAML file
```bash
kubectl delete -f pod2.yml
``` 


# hw to go into running pod and it's container
```bash
kubectl exec -it nginx-pod -- /bin/bash
```

or
kubectl exec -it nginx-pod -- /bin/bash || kubectl exec -it nginx-pod -- /bin/sh || kubectl exec -it nginx-pod -- bash

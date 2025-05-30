How to generate the yaml file

```bash
kubectl create deployment sample --image=nginx --dry-run=client -o yaml > deploy.yml
```

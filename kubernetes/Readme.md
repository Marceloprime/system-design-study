Links:
https://kind.sigs.k8s.io/

cmd1:
kind create cluster

cmd2: conectar ao cluster
kubectl cluster-info --context kind-kind

cmd3:
kubectl get nodes

cmd4: aplicando o manifesto no kubnets
kubectl apply -f pod.yaml

cmd5: pegando os kubs
kubectl get pods

cmd6: removendo os kubs
kubectl delete pods

Replica set, fica gerenciando os pods

cmd7: criado replicar
kubectl apply -f replicaset.yaml

cmd8: lista replicas
kubectl get rs

cmd9: removendo os rs
kubectl delete rs

cmd10: criado deployment
kubectl apply -f deployment.yaml


# LAB10 Zadanie1




## Komendy:

Initialize a swarm
```bash
docker swarm init

```

Build image
```bash
docker build -t docker-healthcheck .

```
Create service
```bash
docker service create --name service_zadanie1 -d docker-healthcheck
```

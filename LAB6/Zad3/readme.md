
# LAB 6 zadanie 3




## Stworzenie obrazu z Dockerfile



express
```bash
docker build -t zad3_express express/.

```
flask
```bash
docker build -t zad3_flask flask/.
```
## uruchomienie kontenerów

```bash
docker container run --rm -d --name postgres --label traefik.port=5432 -v "//Users/maciejdubowik/Desktop/TBK/YBK/LAB6/Zad3/database/":/docker-entrypoint-initdb.d -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=zad3_db postgres:11.5-alpine

docker container run --rm -d --name express --label traefik.enable=true --label traefik.port=8000 --label traefik.priority=1 --label traefik.http.routers.express.rule="Host(\"zad3.com\")" zad3_express

docker container run --rm -d --name flask --label traefik.enable=true --label traefik.port=5000 --label traefik.priority=10 --label traefik.http.routers.flask.rule="Host(\"zad3.com\") && PathPrefix(\"/cars\")" zad3_flask

docker run -d --name traefik -p 8080:8080 -p 80:80 -v /var/run/docker.sock:/var/run/docker.sock traefik:latest --api.insecure=true --providers.docker
```

## wykonanie zapytań
wyświetlenie samochodów z rokiem 2018: lab6zad3.com/cars?year=2018 

pokazanie wszystkich samochodów: lab6zad3.com/cars


dodanie nowego samochodu: lab6zad3.com/addCar

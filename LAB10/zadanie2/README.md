
# LAB10 Zadanie2




## Komendy:

Inicjalizacja swarma:
```bash
docker swarm init

```
Wdrożenie stosu zdefiniowanego w docker-compose.yaml pod nazwą zadanie2:
```bash
docker stack deploy -c docker-compose.yaml zadanie2

```
Po utworzeniu pliku docker-compose-update.yaml poniższa komenda scali nam to w jeden plik stack.yaml:
```bash
docker-compose -f docker-compose.yaml -f docker-compose-update.yaml config > stack.yaml
```
Wdrożenie stosu:
```bash
docker stack deploy -c stack.yaml zadanie2
```
maciejdubowik@MacBook-Pro-Maciej TBK % docker ps
CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS          PORTS                  NAMES
cacb74bdaeb0   zad2_fix_client   "docker-entrypoint.s…"   11 minutes ago   Up 11 minutes   0.0.0.0:3000->80/tcp   zad2_fix_client_1
3c999ba0b16b   zad2_fix_server   "docker-entrypoint.s…"   11 minutes ago   Up 11 minutes   0.0.0.0:9000->80/tcp   zad2_fix_server_1
maciejdubowik@MacBook-Pro-Maciej TBK % docker network ls 
NETWORK ID     NAME               DRIVER    SCOPE
b44761428f15   bridge             bridge    local
b437512f52ad   host               host      local
c6c6eab87ca2   lab6_default       bridge    local
6d579b4e6106   none               null      local
a38d763f4f7d   zad2_default       bridge    local
bd2d635f1de1   zad2_fix_default   bridge    local
maciejdubowik@MacBook-Pro-Maciej TBK % docker network inspect zad2_fix_default
[
    {
        "Name": "zad2_fix_default",
        "Id": "bd2d635f1de1a651e9be7eb65665101183c15c6453070ea2c780da108a1936a5",
        "Created": "2022-11-14T19:34:43.352442752Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.22.0.0/16",
                    "Gateway": "172.22.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "3c999ba0b16b503257a589573c94a60c398872eba4d2ea0ab3e8d83808ec7d7b": {
                "Name": "zad2_fix_server_1",
                "EndpointID": "df3b9f71effc35ddfb1c88ff80b87f36e49ed014c81a7dd145c713d219a73c94",
                "MacAddress": "02:42:ac:16:00:02",
                "IPv4Address": "172.22.0.2/16",
                "IPv6Address": ""
            },
            "cacb74bdaeb0dd30a11bb336f0177a7f4f6922473ee68ce33aeb077b34378b36": {
                "Name": "zad2_fix_client_1",
                "EndpointID": "9538dee46a5fbea34c0b045e30216375f0e595447c5579e373beb58b1a4c241e",
                "MacAddress": "02:42:ac:16:00:03",
                "IPv4Address": "172.22.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "default",
            "com.docker.compose.project": "zad2_fix",
            "com.docker.compose.version": "1.29.2"
        }
    }
]
maciejdubowik@MacBook-Pro-Maciej TBK % 

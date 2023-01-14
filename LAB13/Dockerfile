FROM openjdk:20-slim as builder

WORKDIR /app

COPY . /app/

RUN javac Main.java

ENTRYPOINT [ "java", "Main" ]
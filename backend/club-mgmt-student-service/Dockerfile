FROM maven:3.8.1-openjdk-17-slim AS builder
WORKDIR ./
COPY pom.xml .
RUN mvn -e -B dependency:resolve
COPY src ./src
RUN mvn clean install -DskipTests -e -B package

FROM eclipse-temurin:17-jdk-alpine

COPY --from=builder /target/club-mgmt-student-service-0.0.1-SNAPSHOT.jar /club-mgmt-student-service-0.0.1-SNAPSHOT.jar
ENV dbname=mysqldb
ENTRYPOINT [ "java", "-jar", "/club-mgmt-student-service-0.0.1-SNAPSHOT.jar" ]


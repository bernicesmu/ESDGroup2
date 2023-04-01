
FROM eclipse-temurin:19-jdk-jammy

COPY /target/club-mgmt-student-service-0.0.1-SNAPSHOT.jar /club-mgmt-student-service-0.0.1-SNAPSHOT.jar
ENV dbname=mysqldb
ENTRYPOINT [ "java", "-jar", "/club-mgmt-student-service-0.0.1-SNAPSHOT.jar" ]


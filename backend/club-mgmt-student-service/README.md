# club-mgmt-student-service

Personal Branch for ESD Project as I had troubles with the parent directory and name spaces of previous file structure that led to a lot of compile errors.

## List of functionalities and endpoints created:
1. **[GET]** localhost:8080/student/ , returns all student in the database
2. **[GET]** localhost:8080/student/{matricNum}/health , return medical info for particular student
3. **[GET]** localhost:8080/student/{matricNum}/contact , return contact info for particular student
4. **[POST]** localhost:8080/student/register , takes in a key-value pair JSON with student details, creates student in database
5. **[POST]** localhost:8080/student/ , takes in a key-value pair JSON with a student matricNum , returns details for a student
5. **[POST]** localhost:8080/student/group , takes in a list of matric numbers (String) , returns details for all students in group. If one does not exist, return null for that particular student.
5. **[PUT]** localhost:8080/student/ , depracated, used to update just NoK info. 
6. **[PUT]** localhost:8080/student/{matricNum}/update, takes in a key-value pair JSON to update everything but matricNum and id  
7. **[DELETE]** localhost:8080/student/{matricNum} , deletes student in database

## To Dos:
1. ~~Make database persistant~~
2. ~~Dockerize with database~~
3. Implement search by club (?), if we are not storing club data within this table, then will be retrieve information given a list of matricnumbers
4. Look into clarifying primary keys, do we want to use DB generated ID or just MatricNumber as primary keys? 
5. ~~Add waypoints to add in / modify blocks of information eg. medical, nok only.~~

## Known Issues:
1. RequestMapping does not seem to like multiple slashes
```
@RequestMapping("/student") #Works as expected
@RequestMapping("/student/api/v1") #Gives whitelabel error
```

___
# Dockerizing with MySql

Upon pulling the file, steps to take in the root folder are 
```
1. docker build -t springboot-studentservice .
2. docker-compose up
```

Ignore commands below.
1. Pull `MySQL` image in `docker`
```
docker pull MySql
```
2. Create `docker network` 
```
docker network create <name>
docker network ls
```
3. 

MySQL User: dockeruser pw:1234
```
docker run --name mysqldb --network <networkname> -e MYSQL_ROOT_PASSWORD -d mysql:latest
docker run --name mysqldb --network springboot-mysql-net --hostname mysqldb -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=a -e MYSQL_PASSWORD=1234 -e MYSQL_DATABASE=studentdb -p 3306:3306  -d mysql:latest 
```


___
# Building Springboot Image
1. Use environment variables for application.properties
```
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Ddbname=localhost
mvn clean install -Ddbname=localhost
```
2. Build using
```
docker build -t springboot-studentservice  .    
```

3. Run using
```
docker run --network springboot-mysql-net --name springboot-studentservice -p 8080:8080 -e dbname=mysqldb -d springboot-studentservice 
```

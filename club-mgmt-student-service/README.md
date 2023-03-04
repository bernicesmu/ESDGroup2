# club-mgmt-student-service

Personal Branch for ESD Project as I had troubles with the parent directory and name spaces of previous file structure that led to a lot of compile errors.

## List of functionalities and endpoints created:
1. localhost:8080/student/ , returns all student in the database, GET
2. localhost:8080/student/ , creates student in database, POST
3. localhost:8080/student/{matricNum} , deletes student in database, DELETE

## To Dos:
1. Make database persistant
2. Dockerize with database
3. Implement search by club (?), if we are not storing club data within this table, then will be retrieve information given a list of matricnumbers
4. Look into clarifying primary keys, do we want to use DB generated ID or just MatricNumber as primary keys? 
5. Add waypoints to add in / modify blocks of information eg. medical, nok only.

## Known Issues:
1. RequestMapping does not seem to like multiple slashes
```
@RequestMapping("/student") #Works as expected
@RequestMapping("/student/api/v1") #Gives whitelabel error
```
2. Database is currently not persistent

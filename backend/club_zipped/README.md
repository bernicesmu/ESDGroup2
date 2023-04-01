# Club Microservice

## List of functionalities and endpoints created:
### clubs Table
1. **[GET]** localhost:5102/api/clubs , returns all club details in the database
2. **[GET]** localhost:5102/api/clubs/{club_id} , returns a string of a club's name for a particular club_id
3. **[POST]** localhost:5102/api/clubs , takes in a key-value pair JSON with club details, creates club in database
4. **[PUT]** localhost:5102/api/clubs/{club_id} , used to update club info.
5. **[DELETE]** localhost:5102/api/clubs/{club_id} , deletes club from database

### club_members Table
1. **[GET]** localhost:5102/api/club_members , returns all club member details in the database
2. **[GET]** localhost:5102/api/club_members/{club_id} , returns an array of student matric numbers of club members for a particular club_id
3. **[POST]** localhost:5102/api/club_members , takes in a key-value pair JSON with club member details, creates club member in database
4. **[PUT]** localhost:5102/api/club_members/{club_member_id} , used to update club member info.
5. **[DELETE]** localhost:5102/api/club_members/{club_member_id} , deletes club member from database

### club_excos Table
1. **[GET]** localhost:5102/api/club_excos , returns all club exco details in the database
2. **[GET]** localhost:5102/api/club_excos/{club_id} , returns an array of student matric numbers of club members for a particular club_id
3. **[POST]** localhost:5102/api/club_excos , takes in a key-value pair JSON with club member details, creates club member in database
4. **[PUT]** localhost:5102/api/club_excos/{club_member_id} , used to update club member info.
5. **[DELETE]** localhost:5102/api/club_excos/{club_member_id} , deletes club member from database

## For inter-container communication:
http://laravel-docker:80/api/clubs
http://laravel-docker:80/api/club_members
http://laravel-docker:80/api/club_excos
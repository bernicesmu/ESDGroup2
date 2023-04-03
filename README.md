# ESDGroup2
ESD Project for AY22/23 Sem 2

Members: Atrayee Dutt, Bernice Teo, Bryan Lee, Ivan Yeo, Lim Xun Yi, Regine Tan 

The CLUMSY application can only work when both the backend and the frontend are running 

### To start the backend: 
- File directory: ESDGroup2/backend 
- Command line: docker-compose -f docker-compose-signup.yml up

| Docker Images | Docker Containers |
| --------------------------- | --------------------------- |
| bernicesmu/event:1.0  | event  |
| bernicesmu/auth  | exco  |
| bernicesmu/upload_signup:1.0  | upload_signup-ms |
| bernicesmu/attendance:1.0  | attendance |
| bernicesmu/generatetoken  | generatetoken |
| bernicesmu/amqplistener  | amqplistener-service  |
| bernicesmu/clumsybot  | clumsybot-service  |
| bernicesmu/springboot-studentservice  | student |
| mysql:latest | telesqldb-service  |
| mysql:latest | mysql_db  |
| mysql | mysqldb  |
| postgres:13 | eventDb  |
| bernicesmu/event:1.0 | eventMigration |

### To start the frontend: 
- File directory: ESDGroup2/frontend/main-app 
- Command line: npm run start 

### Accounts to login to CLUMSY 
| Email | Password |
| ------------- | ------------- |
| bryan.lee.2021@scis.smu.edu.sg  | chicken123  |

___
### Signing up for Telegram Bot
1. Ensure backend has been started and Notification service is running.
2. Search `@clumy_notibot` on Telegram.
3. Enter `/start` and follow bot's instructions. 
4. Ensure that the matric number keyed in is sent on the front-end service.

### Clearing DB
This is only applicable to services that uses `volumes` in `docker` to persist data through restarts. 
1. Ensure that the relevant containers have been deleted. Use `docker-compose down`. 
2. Go to volume tab inside **Docker Desktop** and locate the relevant volumes. Delete those volumes.
3. Additionally, ensure that `restart: always` is set on the service tied with the deleted volume / database. This is to prevent instances where `docker` takes longer to initialize the db and your service is unable to connect to it.

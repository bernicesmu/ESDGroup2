# ESDGroup2
ESD Project for AY22/23 Sem 2

Members: Atrayee Dutt, Bernice Teo, Bryan Lee, Ivan Yeo, Lim Xun Yi, Regine Tan 

The CLUMSY application can only work when both the backend and the frontend are running 

To start the backend: 
- Start your WAMP / MAMP 
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

To start the frontend: 
- File directory: ESDGroup2/frontend/main-app 
- Command line: npm run start 

Accounts to login to CLUMSY 
| Username | Password |
| ------------- | ------------- |
| user1  | 123456789  |
| user2  | 123456789  |

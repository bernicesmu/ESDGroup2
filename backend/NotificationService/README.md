
### MySQLDb for Telegram Bot
```
docker run --name telesqldb --network tele-mysql-net --hostname telesqldb -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_USER=a -e MYSQL_PASSWORD=1234 -e MYSQL_DATABASE=telesessiondb -p 3306:3306  -d mysql:latest 
```
### Subscribing to Bot
1. Ensure `ClumsyBot.py` is running.
2. Search `@clumy_notibot` on Telegram and start chat.
3. Key in matric number and send to let bot save chat ID.

### Publishing a message.
Messages are invoked via this URL:
```
"https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={id}&text={bot_message}"
```

### Current Issue
1. Telegram Handles are separate from Chat IDs. Current login process does not save Chat IDs until user interacts with ClumsyBot.
2. ClumsyBot is connected to a database that stores MatricNum, ChatIDs.
3. When Attendance service broadcasts messages, they do NOT have ChatIDs. They broadcast a list containing the MatricNums that have to be looked up in the Telegram Bot database.
4. As of now, unsure how to trigger that look up process via HTTP.
import os
import telebot
from telebot import types
from os import environ 

from dotenv import load_dotenv
import mysql.connector
import MySQLdb

load_dotenv()
# bot_token = os.getenv("BOT_TOKEN")
# host_name = os.getenv("HOST_NAME")
# user = os.getenv("MYSQL_USER")
# pw = os.getenv("MYSQL_PASSWORD")
# db = os.getenv("DB_NAME")

bot_token = os.environ.get("BOT_TOKEN")
host_name = os.environ.get("HOST_NAME")
user = os.environ.get("MYSQL_USER")
pw = os.environ.get("MYSQL_PASSWORD")
db = os.environ.get("MYSQL_DATABASE")

def main():
    bot = telebot.TeleBot(bot_token)
    @bot.message_handler(commands=["start"])
    def start(message:str) ->None:
        """
        Request for users matric number to map it to sid.
        """
        keyboard = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['0']
        ]
        # markup = types.ReplyKeyboardMarkup(keyboard, resize_keyboard=True, one_time_keyboard=True)
        bot.send_message(message.chat.id, "Please input your matriculation number.")
    
    @bot.message_handler(func=lambda m: True)
    def getMatricNum(message:str) -> None:
        try:
            bot.reply_to(message, f"Hey dont work bro, {host_name, user,pw,db,bot_token}")
            conn_mysql = MySQLdb.connect(host=host_name,user=user,passwd=pw,database=db)
            cursor = conn_mysql.cursor()
            query = "SELECT * FROM  " + str(db)
            # Create table
            sql_command = "CREATE TABLE IF NOT EXISTS telesession(id INT PRIMARY KEY AUTO_INCREMENT,matricNum VARCHAR(200),telesid VARCHAR(200));"
            cursor.execute(sql_command)
            # Connect to MySQLDB
            # Skipping verification first
            print(message.text, message.chat.id)
            sid = message.chat.id
            matricNum = message.text
            query = "INSERT INTO telesession (matricNum,telesid)  VALUES  (%s, %s)"
            cursor.execute(query,(matricNum, sid) )
            # Commit changes and close db.
            conn_mysql.commit()
            conn_mysql.close()
            matricNums = [matricNum, matricNum]
            # bot.reply_to(message, f"Your sid is {sid, type(sid)} matricNum is {matricNum}")
            # bot.reply_to(message, f"Your sid is {getSid(matricNums)}, matricNum is {matricNum}")
            bot.reply_to(message, "Thank you! You have successfully registered for ClumsyBot notification services! Updates will be automatically sent.")
        except Exception as error:
            bot.reply_to(message, error)
            print(f"Cause: {error}")
    
    def getSid(matricNums:list) -> list: 
        try:
            conn_mysql = MySQLdb.connect(host=host_name,user=user,passwd=pw,database=db)
            cursor = conn_mysql.cursor()
            matricNums_str = ",".join(["'%s'" % matricNum for matricNum in matricNums])
            query = "SELECT telesid FROM telesession WHERE matricNum IN (%s)" % matricNums_str
            cursor.execute(query)
            results = cursor.fetchall()
            sids = [result[0] for result in results] if results else []
            return sids
        except Exception as error:
            print(f"Cause: {error}")
            return error
    bot.polling()


if __name__ == '__main__':
    print("Starting bot")
    main()
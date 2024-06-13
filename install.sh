#!/bin/sh
#sudo npm install express io jquery jsdom mysql router socket.io supervisor favicon-serve
mv db_template.json db.json
echo "Please enter your administrator Password. It will be needet to add goals, increase Values, usw."
read Password
echo Password >> saved_password.txt
echo "Your Password was saved in saved_password.txt"

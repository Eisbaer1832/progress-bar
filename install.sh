#!/bin/sh
sudo npm install express io jquery jsdom mysql router socket.io supervisor favicon-serve
touch currentgift.txt
touch goalpassed.txt
touch currentgoal.txt
touch erledigt.txt
touch height1.txt
touch height2.txt
touch height3.txt
touch height4.txt
touch height5.txt
touch height6.txt
touch hoehe.txt
touch maxHoehe.txt
touch name1.txt
touch name2.txt
touch name3.txt
touch name4.txt
touch name5.txt
touch name6.txt
touch nochzutuen.txt
touch saved_passwort.txt
touch text.txt
echo "Please enter your administrator Password. It will be needet to add goals, increase Values, usw."
read Password
echo Password >> saved_password.txt
echo "Your Password was saved in saved_password.txt"

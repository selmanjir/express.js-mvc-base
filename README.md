# express.js-mvc-base
MVC structure based on node.js &amp; express.js


Firstly run
```
-> npm init
```
and

install your packages
add controllers, views, routes and model folder
update your database name in config.json
```
-> cd src
-> sequelize init
-> sequelize model:generate --name test --attributes full_name:string,user_name:string (You can set it according to the database you want to create.)
-> sequelize db:migrate
```
if you have any error try this
```
-> npm install -g sequelize-cli
-> npm install --save sequelize-cli
```
Check for path after successful installation you should see something like this

C:\Users\selman\AppData\Roaming\npm\sequelize

C:\Users\selman\AppData\Roaming\npm\node_modules\sequelize-cli\lib\sequelize

C:\Users\selman\AppData\Roaming\npm\node_modules\sequelize-cli


## Packages

> 1. ejs
> 2. express
> 3. mysql2
> 4. nodemon
> 5. sequelize
> 6. sequelize-cli (global)

## Package.json
![Packega.json](https://i.hizliresim.com/9dqcp0w.png)

## Folders
![Folders](https://i.hizliresim.com/ouw3u3w.jpg)




So ready to use.

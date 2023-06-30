# JuhosiWebApp

if you don't want to start angular application on local, you can go to this site (frontend)
netlify link - https://juhosi.netlify.app/

# step 1 : create db and tables in mysql

```
create database juhosi;

use juhosi;

create TABLE auth (username varchar(50) primary key,password varchar(50));
 INSERT into auth values('admin','admin');
 INSERT into auth values('customer1','customer1');
 INSERT into auth values('customer2','customer2');





  CREATE TABLE order_list (
     username VARCHAR(100),
     FOREIGN KEY (username)
         REFERENCES auth (username),
     order_date DATE,
     company VARCHAR(100),
     owner VARCHAR(100),
     item VARCHAR(100),
     quantity INT,
     weight DECIMAL(8, 2),
     req_for_shipment VARCHAR(100),
     tracking_id VARCHAR(100),
     shipment_size VARCHAR(100),
     box_count INT,
     specification VARCHAR(100),
     checklist_quantity VARCHAR(100)
); 
 ```

# step 2 : Backend 

go to backend/src/

create .env file containing db_passwd = (your db password) and dbName = juhosi, like

```
db_passwd='password'
dbName=juhosi
```


install packages and start nodejs backend server, run
  
  ```
  npm install
  node index.js
  ```

# step 3 : before starting Angular App, run

go to root directory (' / ')

```
npm install
```

# step 4 : start Angular App, run
```
ng s
````


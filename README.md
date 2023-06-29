# JuhosiWebApp

# create db in mysql
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
 
# for Backend 
- step 1 start nodejs backend server , go to backend/src/ run ' node index.js '
# before starting Angular App
- run ' npm install ' 
# start Angular App
- run ' ng s '

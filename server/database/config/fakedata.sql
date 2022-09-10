BEGIN;

DROP TABLE IF EXISTS  users;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
  user_name varchar(100) NOT NULL,
  user_password  VARCHAR(250) NOT NULL,
  user_email  VARCHAR(100) NOT NULL UNIQUE,
   user_logo  VARCHAR(500) NOT NULL
);



CREATE TABLE posts(
id SERIAL PRIMARY KEY,
title  varchar(100) NOT NULL,
body text NOT NULL,
user_id int NOT NULL,
up_votes int NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
body text NOT NULL,
user_id int NOT NULL,
post_id int NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (post_id) REFERENCES posts(id)
);


insert into users (user_name,user_password,user_email,user_logo) values ('nada','12345','nadaayesh10@gmail.com','sssss');



COMMIT;

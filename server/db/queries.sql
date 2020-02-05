CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username varchar(255),
	password varchar(255),
	email varchar(255)
);

CREATE TABLE IF NOT EXISTS groups (
	id SERIAL PRIMARY KEY,
	name varchar(255)
);

CREATE TABLE IF NOT EXISTS user_groups (
	id INT,
	user_id INT,
  	group_id INT,
  	PRIMARY KEY (id, user_id, group_id),
  	FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE,
  	FOREIGN KEY (group_id) REFERENCES groups(id) ON UPDATE CASCADE
);
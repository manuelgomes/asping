--
-- Database: asping_db
--

CREATE DATABASE asping_db;

-- ENTITIES

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130)  NOT NULL,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity base
--

CREATE TABLE IF NOT EXISTS "base" (
	as_of date  NOT NULL,
	country varchar(130)  NOT NULL,
	lat numeric ,
	lon numeric ,
	postcode varchar(130)  NOT NULL,
	until date ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity ping
--

CREATE TABLE IF NOT EXISTS "ping" (
	lat numeric  NOT NULL,
	lon numeric  NOT NULL,
	when date  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m based User - base
ALTER TABLE user ADD COLUMN based INTEGER  REFERENCES "base"(_id);

-- relation 1:m pings User - ping
ALTER TABLE user ADD COLUMN pings INTEGER  REFERENCES "ping"(_id);

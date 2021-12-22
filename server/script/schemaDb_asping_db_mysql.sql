--
-- Database: `asping_db`
--

CREATE DATABASE IF NOT EXISTS `asping_db`;
USE `asping_db`;


-- ENTITIES

--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130)  NOT NULL,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `asping_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `asping_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `base`
--

CREATE TABLE IF NOT EXISTS `base` (
	`as_of` date  NOT NULL,
	`country` varchar(130)  NOT NULL,
	`lat` numeric ,
	`lon` numeric ,
	`postcode` varchar(130)  NOT NULL,
	`until` date ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `ping`
--

CREATE TABLE IF NOT EXISTS `ping` (
	`lat` numeric  NOT NULL,
	`lon` numeric  NOT NULL,
	`when` date  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m based User - base
ALTER TABLE `user` ADD COLUMN `based` int(11)  REFERENCES base(_id);

-- relation 1:m pings User - ping
ALTER TABLE `user` ADD COLUMN `pings` int(11)  REFERENCES ping(_id);



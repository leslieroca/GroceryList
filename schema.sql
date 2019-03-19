/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to execute the queries in this file.
 */

DROP TABLE IF EXISTS `items`;
		
CREATE TABLE `items` (
  `name` VARCHAR(128)NULL DEFAULT NULL,
  `qty` INTEGER NULL DEFAULT NULL
);
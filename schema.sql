/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to execute the queries in this file.
 */

DROP TABLE IF EXISTS `items`;
		
CREATE TABLE `items` (
  `name` VARCHAR NULL DEFAULT NULL,
  `qty` INTEGER(128) NULL DEFAULT NULL
);
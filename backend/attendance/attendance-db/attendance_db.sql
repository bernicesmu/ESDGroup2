CREATE DATABASE IF NOT EXISTS `attendancesqldb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `attendancesqldb`;

DROP TABLE IF EXISTS `sign_ups`;
CREATE TABLE IF NOT EXISTS `sign_ups` (
  `id` SERIAL,
  `eventId` varchar(20) NOT NULL,
  `studentMatricNum` varchar(20) NOT NULL,
  `signUp` INTEGER,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sign_ups` (`id`, `eventId`, `studentMatricNum`, `signUp`) VALUES
('1', '1','97811294',1),
('2', '23', '97813494',1),
('3', '34', '34474234', 1),
('4', '43', '32146785', 1),
('5', '4', '12345678', 1);
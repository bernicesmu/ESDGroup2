CREATE DATABASE IF NOT EXISTS `attendancesqldb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `attendancesqldb`;

DROP TABLE IF EXISTS `sign_ups`;
CREATE TABLE IF NOT EXISTS `sign_ups` (
  `eventId` varchar(20) NOT NULL,
  `studentMatricNum` varchar(20) NOT NULL,
  `signUp` INT,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `sign_ups` (`eventId`, `studentMatricNum`, `signUp`) VALUES
('1','1429384',1),
('1','1338329',1),
('1','1301938',1),
('1','1237819',1),
('1','1815063',1),
('1','1429605',1),
('1','1760382',1),
('2','1338329',1),
('2','1301938',1),
('3','1338329',1),
('3','1301938',1),
('3','1338329',1),
('3','1301938',1),
('3','1302934',1),
('4','1338329',1),
('4','1301938',1),
('4','1419345',1),
('4','1986754',1),
('4','1237819',1),
('5','1302934',1),
('6','1301938',1),
('6','1338329',1),
('6','1301938',1),
('6','1429605',1),
('6','1760382',1);
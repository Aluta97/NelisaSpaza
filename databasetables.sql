-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 10, 2016 at 02:30 PM
-- Server version: 5.5.53-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nelisa`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` char(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_category` (`category`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(2, 'Bakery'),
(3, 'Canned Food'),
(1, 'Dairy'),
(9, 'Extras'),
(7, 'Fruit'),
(4, 'Soft Drinks'),
(5, 'Starch'),
(8, 'Sweets'),
(6, 'Toiletries');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` char(100) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_description` (`description`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `category_id`) VALUES
(1, 'Milk 1l', 1),
(2, 'Imasi', 1),
(3, 'Bread', 2),
(4, 'Chakalaka Can', 3),
(5, 'Gold Dish Vegetable Curry Can', 3),
(6, 'Fanta 500ml', 4),
(7, 'Coke 500ml', 4),
(8, 'Cream Soda 500ml', 4),
(9, 'Iwisa Pap 5kg', 5),
(10, 'Top Class Soy Mince', 5),
(11, 'Shampoo 1 litre', 6),
(12, 'Soap Bar', 6),
(13, 'Bananas - loose', 7),
(14, 'Apples - loose', 7),
(15, 'Mixed Sweets 5s', 8),
(16, 'Heart Chocolates', 8),
(17, 'Rose (plastic)', 9),
(18, 'Valentine Cards', 9);

-- --------------------------------------------------------

--
-- Table structure for table `purcahses`
--

CREATE TABLE IF NOT EXISTS `purcahses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `purchase_date` char(100) NOT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `cost` char(100) NOT NULL,
  `prod_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prod_id` (`prod_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=154 ;

--
-- Dumping data for table `purcahses`
--

INSERT INTO `purcahses` (`id`, `purchase_date`, `quantity`, `cost`, `prod_id`) VALUES
(1, '23-Jan', 3, 'R7,00', 4),
(2, '23-Jan', 3, 'R3,50', 7),
(3, '23-Jan', 4, 'R4,50', 8),
(4, '23-Jan', 2, 'R4,50', 6),
(5, '23-Jan', 2, 'R5,00', 5),
(6, '23-Jan', 1, 'R17,00', 2),
(7, '23-Jan', 3, 'R20,00', 9),
(8, '23-Jan', 4, 'R7,00', 1),
(9, '23-Jan', 5, 'R8,00', 10),
(10, '28-Jan', 4, 'R1,00', 13),
(11, '28-Jan', 10, 'R1,50', 14),
(12, '28-Jan', 60, 'R3,00', 15),
(13, '28-Jan', 1, 'R20,00', 11),
(14, '28-Jan', 3, 'R3,00', 12),
(15, '28-Jan', 30, 'R9,00', 3),
(16, '28-Jan', 15, 'R7,00', 4),
(17, '28-Jan', 36, 'R3,50', 7),
(18, '28-Jan', 24, 'R4,50', 8),
(19, '28-Jan', 24, 'R4,50', 6),
(20, '28-Jan', 15, 'R5,00', 5),
(21, '28-Jan', 15, 'R17,00', 2),
(22, '28-Jan', 15, 'R20,00', 9),
(23, '28-Jan', 25, 'R7,00', 1),
(24, '28-Jan', 10, 'R8,00', 10),
(25, '02-Feb', 1, 'R20,00', 11),
(26, '02-Feb', 3, 'R3,00', 12),
(27, '03-Feb', 12, 'R1,00', 13),
(28, '03-Feb', 100, 'R1,50', 14),
(29, '03-Feb', 240, 'R3,00', 15),
(30, '04-Feb', 2, 'R20,00', 11),
(31, '04-Feb', 5, 'R3,00', 12),
(32, '04-Feb', 4, 'R11,00', 3),
(33, '04-Feb', 4, 'R24,00', 2),
(34, '06-Feb', 8, 'R1,00', 13),
(35, '06-Feb', 100, 'R1,50', 14),
(36, '06-Feb', 150, 'R3,00', 15),
(37, '06-Feb', 5, 'R3,00', 12),
(38, '6-Feb', 30, 'R9,00', 3),
(39, '6-Feb', 15, 'R7,00', 4),
(40, '6-Feb', 36, 'R3,50', 7),
(41, '6-Feb', 18, 'R4,50', 8),
(42, '6-Feb', 24, 'R4,50', 6),
(43, '6-Feb', 15, 'R5,00', 5),
(44, '6-Feb', 25, 'R17,00', 2),
(45, '6-Feb', 5, 'R20,00', 9),
(46, '6-Feb', 10, 'R7,00', 1),
(47, '6-Feb', 10, 'R8,00', 10),
(48, '09-Feb', 20, 'R10,00', 17),
(49, '09-Feb', 3, 'R9,50', 1),
(50, '10-Feb', 4, 'R1,00', 13),
(51, '10-Feb', 20, 'R1,50', 14),
(52, '10-Feb', 150, 'R3,00', 15),
(53, '10-Feb', 10, 'R9,00', 3),
(54, '10-Feb', 15, 'R7,00', 4),
(55, '10-Feb', 18, 'R3,50', 7),
(56, '10-Feb', 5, 'R5,00', 5),
(57, '10-Feb', 20, 'R25,00', 16),
(58, '10-Feb', 10, 'R17,00', 2),
(59, '10-Feb', 5, 'R20,00', 9),
(60, '10-Feb', 10, 'R7,00', 1),
(61, '10-Feb', 15, 'R8,00', 10),
(62, '11-Feb', 2, 'R20,00', 11),
(63, '11-Feb', 20, 'R2,00', 18),
(64, '12-Feb', 3, 'R9,50', 1),
(65, '13-Feb', 4, 'R1,00', 13),
(66, '13-Feb', 50, 'R3,00', 15),
(67, '13-Feb', 3, 'R20,00', 11),
(68, '13-Feb', 5, 'R3,00', 12),
(69, '13-Feb', 5, 'R8,50', 5),
(70, '13-Feb', 5, 'R9,00', 3),
(71, '13-Feb', 12, 'R3,50', 7),
(72, '13-Feb', 12, 'R4,50', 6),
(73, '13-Feb', 20, 'R17,00', 2),
(74, '13-Feb', 15, 'R7,00', 1),
(75, '13-Feb', 5, 'R8,00', 10),
(76, '14-Feb', 1, 'R20,00', 11),
(77, '14-Feb', 2, 'R8,50', 5),
(78, '16-Feb', 2, 'R8,50', 4),
(79, '16-Feb', 2, 'R7,50', 8),
(80, '16-Feb', 1, 'R6,50', 6),
(81, '16-Feb', 2, 'R8,50', 5),
(82, '16-Feb', 1, 'R30,00', 9),
(83, '16-Feb', 6, 'R9,50', 1),
(84, '17-Feb', 60, 'R1,50', 14),
(85, '17-Feb', 12, 'R3,00', 15),
(86, '17-Feb', 15, 'R9,00', 3),
(87, '17-Feb', 10, 'R7,00', 4),
(88, '17-Feb', 24, 'R3,50', 7),
(89, '17-Feb', 12, 'R4,50', 8),
(90, '17-Feb', 12, 'R4,50', 6),
(91, '17-Feb', 10, 'R5,00', 5),
(92, '17-Feb', 15, 'R17,00', 2),
(93, '17-Feb', 5, 'R20,00', 9),
(94, '17-Feb', 15, 'R7,00', 1),
(95, '17-Feb', 5, 'R8,00', 10),
(96, '18-Feb', 1, 'R20,00', 11),
(97, '18-Feb', 5, 'R3,00', 12),
(98, '19-Feb', 2, 'R20,00', 11),
(99, '19-Feb', 1, 'R9,50', 1),
(100, '20-Feb', 20, 'R1,00', 13),
(101, '20-Feb', 90, 'R1,50', 14),
(102, '20-Feb', 20, 'R3,00', 15),
(103, '20-Feb', 2, 'R20,00', 11),
(104, '20-Feb', 3, 'R3,00', 12),
(105, '20-Feb', 10, 'R9,00', 3),
(106, '20-Feb', 10, 'R17,00', 2),
(107, '20-Feb', 5, 'R20,00', 9),
(108, '20-Feb', 15, 'R7,00', 1),
(109, '20-Feb', 10, 'R8,00', 10),
(110, '23-Feb', 3, 'R9,00', 4),
(111, '24-Feb', 10, 'R1,00', 13),
(112, '24-Feb', 90, 'R1,50', 14),
(113, '24-Feb', 8, 'R3,00', 15),
(114, '24-Feb', 15, 'R9,00', 3),
(115, '24-Feb', 10, 'R7,00', 4),
(116, '24-Feb', 18, 'R3,50', 7),
(117, '24-Feb', 6, 'R4,50', 8),
(118, '24-Feb', 6, 'R4,50', 6),
(119, '24-Feb', 10, 'R5,00', 5),
(120, '24-Feb', 15, 'R17,00', 2),
(121, '24-Feb', 20, 'R7,00', 1),
(122, '24-Feb', 15, 'R8,00', 10),
(123, '25-Feb', 5, 'R3,00', 12),
(124, '26-Feb', 2, 'R20,00', 11),
(125, '26-Feb', 5, 'R3,00', 12),
(126, '26-Feb', 1, 'R11,00', 3),
(127, '26-Feb', 2, 'R6,50', 6),
(128, '26-Feb', 1, 'R8,50', 5),
(129, '26-Feb', 1, 'R30,00', 9),
(130, '27-Feb', 10, 'R1,00', 13),
(131, '27-Feb', 60, 'R1,50', 14),
(132, '27-Feb', 5, 'R20,00', 11),
(133, '27-Feb', 5, 'R3,00', 12),
(134, '27-Feb', 20, 'R9,00', 3),
(135, '27-Feb', 15, 'R7,00', 4),
(136, '27-Feb', 24, 'R3,50', 7),
(137, '27-Feb', 12, 'R4,50', 8),
(138, '27-Feb', 12, 'R4,50', 6),
(139, '27-Feb', 15, 'R5,00', 5),
(140, '27-Feb', 15, 'R17,00', 2),
(141, '27-Feb', 10, 'R20,00', 9),
(142, '27-Feb', 20, 'R7,00', 1),
(143, '27-Feb', 15, 'R8,00', 10),
(144, '28-Feb', 2, 'R20,00', 11),
(145, '28-Feb', 3, 'R3,00', 12),
(146, '28-Feb', 3, 'R8,50', 4),
(147, '28-Feb', 2, 'R8,50', 5),
(148, '28-Feb', 5, 'R11,00', 10),
(149, '01-Mar', 2, 'R20,00', 11),
(150, '01-Mar', 5, 'R3,00', 12),
(151, '01-Mar', 3, 'R8,50', 4),
(152, '01-Mar', 2, 'R8,50', 5),
(153, '13-May', 12, '34', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `selling_date` char(100) NOT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `selling_prices` char(100) NOT NULL,
  `prod_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prod_id` (`prod_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=120 ;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `selling_date`, `quantity`, `selling_prices`, `prod_id`) VALUES
(1, '8-Feb', 0, 'R10.00', 1),
(2, '8-Feb', 2, 'R25.00', 2),
(3, '8-Feb', 2, 'R12.00', 3),
(4, '8-Feb', 1, 'R10.00', 4),
(5, '8-Feb', 0, 'R9.00', 5),
(6, '8-Feb', 4, 'R6.50', 6),
(7, '8-Feb', 4, 'R6.50', 7),
(8, '8-Feb', 1, 'R7.50', 8),
(9, '8-Feb', 1, 'R30.00', 9),
(10, '8-Feb', 2, 'R12.00', 10),
(11, '8-Feb', 0, 'R30.00', 11),
(12, '8-Feb', 1, 'R6.00', 12),
(13, '8-Feb', 5, 'R2.00', 13),
(14, '8-Feb', 2, 'R2.00', 14),
(15, '8-Feb', 9, 'R3.00', 15),
(16, '9-Feb', 3, 'R10.00', 1),
(17, '9-Feb', 6, 'R25.00', 2),
(18, '9-Feb', 7, 'R12.00', 3),
(19, '9-Feb', 5, 'R10.00', 4),
(20, '9-Feb', 6, 'R9.00', 5),
(21, '9-Feb', 3, 'R6.50', 6),
(22, '9-Feb', 8, 'R6.50', 7),
(23, '9-Feb', 5, 'R7.50', 8),
(24, '9-Feb', 2, 'R30.00', 9),
(25, '9-Feb', 1, 'R12.00', 10),
(26, '9-Feb', 0, 'R30.00', 11),
(27, '9-Feb', 0, 'R6.00', 12),
(28, '9-Feb', 5, 'R2.00', 13),
(29, '9-Feb', 0, 'R2.00', 14),
(30, '9-Feb', 3, 'R3.00', 15),
(31, '10-Feb', 5, 'R10.00', 1),
(32, '10-Feb', 4, 'R25.00', 2),
(33, '10-Feb', 2, 'R12.00', 3),
(34, '10-Feb', 0, 'R10.00', 4),
(35, '10-Feb', 0, 'R9.00', 5),
(36, '10-Feb', 1, 'R6.50', 6),
(37, '10-Feb', 3, 'R6.50', 7),
(38, '10-Feb', 2, 'R7.50', 8),
(39, '10-Feb', 1, 'R30.00', 9),
(40, '10-Feb', 3, 'R12.00', 10),
(41, '10-Feb', 1, 'R30.00', 11),
(42, '10-Feb', 0, 'R6.00', 12),
(43, '10-Feb', 3, 'R2.00', 13),
(44, '10-Feb', 2, 'R2.00', 14),
(45, '10-Feb', 7, 'R2.00', 15),
(46, '10-Feb', 3, 'R35.00', 16),
(47, '10-Feb', 1, 'R15.00', 17),
(48, '11-Feb', 5, 'R10.00', 1),
(49, '11-Feb', 4, 'R25.00', 2),
(50, '11-Feb', 3, 'R12.00', 3),
(51, '11-Feb', 2, 'R10.00', 4),
(52, '11-Feb', 1, 'R9.00', 5),
(53, '11-Feb', 2, 'R6.50', 6),
(54, '11-Feb', 3, 'R6.50', 7),
(55, '11-Feb', 1, 'R7.50', 8),
(56, '11-Feb', 0, 'R30.00', 9),
(57, '11-Feb', 2, 'R12.00', 10),
(58, '11-Feb', 1, 'R30.00', 11),
(59, '11-Feb', 0, 'R6.00', 12),
(60, '11-Feb', 4, 'R2.00', 13),
(61, '11-Feb', 3, 'R2.00', 14),
(62, '11-Feb', 8, 'R2.00', 15),
(63, '11-Feb', 5, 'R35.00', 16),
(64, '11-Feb', 3, 'R15.00', 17),
(65, '12-Feb', 3, 'R10.00', 1),
(66, '12-Feb', 9, 'R25.00', 2),
(67, '12-Feb', 2, 'R12.00', 3),
(68, '12-Feb', 3, 'R10.00', 4),
(69, '12-Feb', 1, 'R9.00', 5),
(70, '12-Feb', 0, 'R6.50', 6),
(71, '12-Feb', 2, 'R6.50', 7),
(72, '12-Feb', 1, 'R7.50', 8),
(73, '12-Feb', 0, 'R30.00', 9),
(74, '12-Feb', 2, 'R12.00', 10),
(75, '12-Feb', 0, 'R30.00', 11),
(76, '12-Feb', 2, 'R6.00', 12),
(77, '12-Feb', 2, 'R2.00', 13),
(78, '12-Feb', 3, 'R2.00', 14),
(79, '12-Feb', 3, 'R3.00', 15),
(80, '12-Feb', 2, 'R35.00', 16),
(81, '12-Feb', 6, 'R4.00', 18),
(82, '12-Feb', 2, 'R15.00', 17),
(83, '13-Feb', 6, 'R10.00', 1),
(84, '13-Feb', 6, 'R25.00', 2),
(85, '13-Feb', 5, 'R12.00', 3),
(86, '13-Feb', 7, 'R10.00', 4),
(87, '13-Feb', 15, 'R9.00', 5),
(88, '13-Feb', 6, 'R6.50', 6),
(89, '13-Feb', 8, 'R6.50', 7),
(90, '13-Feb', 4, 'R7.50', 8),
(91, '13-Feb', 3, 'R30.00', 9),
(92, '13-Feb', 4, 'R12.00', 10),
(93, '13-Feb', 4, 'R30.00', 11),
(94, '13-Feb', 2, 'R6.00', 12),
(95, '13-Feb', 4, 'R2.00', 13),
(96, '13-Feb', 2, 'R2.00', 14),
(97, '13-Feb', 6, 'R3.00', 15),
(98, '13-Feb', 10, 'R35.00', 16),
(99, '13-Feb', 5, 'R4.00', 18),
(100, '13-Feb', 7, 'R15.00', 17),
(101, '14-Feb', 6, 'R10.00', 1),
(102, '14-Feb', 5, 'R25.00', 2),
(103, '14-Feb', 7, 'R12.00', 3),
(104, '14-Feb', 3, 'R10.00', 4),
(105, '14-Feb', 4, 'R9.00', 5),
(106, '14-Feb', 7, 'R6.50', 6),
(107, '14-Feb', 14, 'R6.50', 7),
(108, '14-Feb', 8, 'R7.50', 8),
(109, '14-Feb', 3, 'R30.00', 9),
(110, '14-Feb', 7, 'R12.00', 10),
(111, '14-Feb', 0, 'R30.00', 11),
(112, '14-Feb', 0, 'R6.00', 12),
(113, '14-Feb', 5, 'R2.00', 13),
(114, '14-Feb', 9, 'R2.00', 14),
(115, '14-Feb', 18, 'R3.00', 15),
(116, '14-Feb', 0, 'R35.00', 16),
(117, '14-Feb', 3, 'R4.00', 18),
(118, '14-Feb', 1, 'R15.00', 17),
(119, 'fdfd', 3, 'we4wsres', 1);

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE IF NOT EXISTS `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`id`, `shop`) VALUES
(1, 'Makro'),
(2, 'Epping Market'),
(3, 'HomeMade'),
(4, 'Joe Spaza Shop'),
(5, 'ChinaTown');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(100) NOT NULL,
  `password` char(100) NOT NULL,
  `email` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(4, 'Nelisa', '$2a$10$jgNIffI0frkJ1PfTXKVr7eony2ee2qwaIpRzxYTRVCccM0Mk17ExK', 'Nelisa@gmail.com'),
(5, 'zozo', '$2a$10$/G1L6I5H0tHY53pccskUgeO/iRVn380OyhyXax89tmR3vDqYip4IG', 'zozo@gmail.com'),
(6, 'xolani', '$2a$10$wum67zC.mUnrMC5dxwRtO.spc7Rianif7qKbqllHpD.MbmQWvrpHC', 'xola@gmail.co.za'),
(7, 'Luvo', '$2a$10$GK6GlacAC8bnZT1.xAu3V.hVAV45v1HByJDCicvfCumhIKg.529Gu', 'Luvo@projectcodex.co');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `purcahses`
--
ALTER TABLE `purcahses`
  ADD CONSTRAINT `purcahses_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2025 at 04:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcDonaldsTest`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredientpapers`
--

CREATE TABLE `ingredientpapers` (
  `IngredientID` int(11) NOT NULL,
  `PaperOne` text NOT NULL,
  `PaperTwo` text NOT NULL,
  `PaperThree` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `ingredientpapers`
--

INSERT INTO `ingredientpapers` (`IngredientID`, `PaperOne`, `PaperTwo`, `PaperThree`) VALUES
(6041, 'Beef Paper 1', 'Beef Paper 2', 'Beef Paper 3'),
(1729, 'Iceberg Lettuce Paper 1', 'Iceberg Lettuce Paper 2', 'Iceberg Lettuce Paper 3'),
(3817, 'Cheese Paper 1', 'Cheese Paper 2', 'Cheese Paper 3'),
(8593, 'Onion Paper 1', 'Onion Paper 2', 'Onion Paper 3'),
(4901, 'Pickles Paper 1', 'Pickles Paper 2', 'Pickles Paper 3'),
(7620, 'Seasame Seed Bun Paper 1', 'Seasame Seed Bun Paper 2', 'Seasame Seed Bun Paper 3'),
(3109, 'Big Mac Special Sauce Paper 1', 'Big Mac Special Sauce Paper 2', 'Big Mac Special Sauce Paper 3'),
(5018, 'Ketchup Paper 1', 'Ketchup Paper 2', 'Ketchup Paper 3'),
(6842, 'Mustard Paper 1', 'Mustard Paper 2', 'Mustard Paper 3'),
(2938, 'Soft Burger Bun Paper 1', 'Soft Burger Bun Paper 2', 'Soft Burger Bun Paper 3'),
(1928, 'Mayo Paper 1', 'Mayo Paper 2', 'Mayo Paper 3'),
(9384, 'Chicken Paper 1', 'Chicken Paper 2', 'Chicken Paper 3');

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `IngredientID` int(11) NOT NULL,
  `IngredientName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`IngredientID`, `IngredientName`) VALUES
(6041, 'Beef'),
(1729, 'Iceberg Lettuce'),
(3817, 'Cheese'),
(8593, 'Onion'),
(4901, 'Pickles'),
(7620, 'Seasame Seed Bun'),
(3109, 'Big Mac Special Sauce'),
(5018, 'Ketchup'),
(6842, 'Mustard'),
(2938, 'Soft Burger Bun'),
(1928, 'Mayo'),
(9384, 'Chicken');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `ProductName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductName`) VALUES
(4928, 'Big Mac'),
(7831, 'Cheeseburger'),
(1509, 'McChicken');

-- --------------------------------------------------------

--
-- Table structure for table `product_ingredients`
--

CREATE TABLE `product_ingredients` (
  `ProductID` int(11) NOT NULL,
  `IngredientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `product_ingredients`
--

INSERT INTO `product_ingredients` (`ProductID`, `IngredientID`) VALUES
(4928, 6041),
(4928, 1729),
(4928, 3817),
(4928, 8593),
(4928, 4901),
(4928, 7620),
(4928, 3109),
(7831, 6041),
(7831, 8593),
(7831, 4901),
(7831, 5018),
(7831, 6842),
(7831, 3817),
(7831, 2938),
(1509, 9384),
(1509, 1729),
(1509, 1928),
(1509, 7620);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

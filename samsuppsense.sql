-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 12:20 PM
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
-- Database: `samsuppsense`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `IngredientID` int(11) NOT NULL,
  `IngredientName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`IngredientID`, `IngredientName`) VALUES
(48291, 'Caffeine (from tea and/or coffee beans)'),
(13724, 'Creatine Monohydrate (Creapure®)'),
(50382, 'Beta-Alanine (as CarnoSyn®)'),
(41976, 'Micronized L-Citrulline'),
(26548, 'Acetyl-L-Carnitine HCl'),
(34197, 'N-Acetyl-L-Tyrosine'),
(14029, 'Citrus Bioflavonoids Complex'),
(67250, 'AstraGIN® (Astragalus membranaceus and Panax notoginseng)'),
(12973, 'Vitamin D (as Cholecalciferol)'),
(21387, 'Thiamin (Vitamin B1)'),
(37842, 'Niacin (Vitamin B3)'),
(15462, 'Vitamin B6'),
(60781, 'Folic Acid'),
(23058, 'Vitamin B12'),
(49876, 'Pantothenic Acid (Vitamin B5)'),
(75920, 'Natural and Artificial Flavors'),
(86173, 'Citric Acid'),
(39041, 'Malic Acid'),
(10284, 'Silicon Dioxide'),
(27635, 'Calcium Silicate'),
(58132, 'Cellulose Gum'),
(98324, 'Xanthan Gum'),
(47462, 'Carrageenan'),
(31289, 'Sucralose'),
(66501, 'Tartaric Acid'),
(78945, 'Acesulfame Potassium'),
(54986, 'Red 40'),
(47291, 'Whey Protein Concentrate'),
(13725, 'Whole Milk Powder'),
(50383, 'Whey Protein Isolate'),
(41977, 'Skim Milk Powder'),
(26549, 'Soy Lecithin'),
(34198, 'Sunflower Lecithin'),
(14030, 'Dextrose'),
(67251, 'Inulin'),
(12974, 'Flavours'),
(21388, 'Guar Gum'),
(37843, 'Papain'),
(59231, 'Hydrolysed Collagen Peptides (Bovine)'),
(68342, 'L-Tryptophan'),
(77453, 'Vitamin C (Ascorbic Acid)'),
(86564, 'Tartrazine'),
(95675, 'Sunset Yellow FCF');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `IngredientName` text NOT NULL,
  `Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` bigint(20) NOT NULL,
  `ProductName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductName`) VALUES
(748927052961, 'Optimum Nutrition Gold Standard Pre-Workout 300g'),
(726684130474, 'Nexus Sports Nutrition Super Protein Collagen Water'),
(9314549902192, 'Musashi High Protein Powder 900g');

-- --------------------------------------------------------

--
-- Table structure for table `product_ingredients`
--

CREATE TABLE `product_ingredients` (
  `ProductID` bigint(20) NOT NULL,
  `IngredientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_ingredients`
--

INSERT INTO `product_ingredients` (`ProductID`, `IngredientID`) VALUES
(748927052961, 48291),
(748927052961, 13724),
(748927052961, 50382),
(748927052961, 41976),
(748927052961, 26548),
(748927052961, 34197),
(748927052961, 14029),
(748927052961, 67250),
(748927052961, 12973),
(748927052961, 21387),
(748927052961, 37842),
(748927052961, 15462),
(748927052961, 60781),
(748927052961, 23058),
(748927052961, 49876),
(748927052961, 75920),
(748927052961, 86173),
(748927052961, 39041),
(748927052961, 10284),
(748927052961, 27635),
(748927052961, 58132),
(748927052961, 98324),
(748927052961, 47462),
(748927052961, 31289),
(748927052961, 66501),
(748927052961, 78945),
(748927052961, 54986),
(748927052961, 95675),
(9314549902192, 47291),
(9314549902192, 13725),
(9314549902192, 50383),
(9314549902192, 41977),
(9314549902192, 26549),
(9314549902192, 34198),
(9314549902192, 14030),
(9314549902192, 67251),
(9314549902192, 12974),
(9314549902192, 21388),
(9314549902192, 37843),
(726684130474, 59231),
(726684130474, 68342),
(726684130474, 77453),
(726684130474, 86564),
(726684130474, 95675),
(726684130474, 13724),
(726684130474, 50382),
(726684130474, 41976),
(726684130474, 26548),
(726684130474, 34197),
(726684130474, 14029),
(726684130474, 67250),
(726684130474, 12973),
(726684130474, 21387);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 22, 2025 at 06:57 PM
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
-- Database: `mcdonaldstest`
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
-- Table structure for table `Messages`
--

CREATE TABLE `Messages` (
  `IngredientName` text NOT NULL,
  `Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `Messages`
--

INSERT INTO `Messages` (`IngredientName`, `Message`) VALUES
('Caffeine (from tea and/or coffee beans)', 'Caffeine stimulates the nervous system, providing increased alertness and energy, but excessive intake can lead to insomnia, restlessness, and increased heart rate.'),
('Creatine Monohydrate (Creapure®)', 'Creatine Monohydrate (Creapure®) enhances physical performance in successive bursts of short-term, high-intensity exercise and improves muscle recovery. It also aids in boosting lean muscle mass and strength.'),
('Beta-Alanine (as CarnoSyn®)', 'Beta-Alanine (as CarnoSyn®) can enhance muscular endurance and improve exercise capacity, potentially leading to better workout performance. It may also cause tingling sensations in the skin.'),
('Micronized L-Citrulline', 'Micronized L-Citrulline is an amino acid that can help increase nitric oxide production, improve blood flow, and reduce muscle fatigue, enhancing exercise performance and cardiovascular health.'),
('Acetyl-L-Carnitine HCl', 'Acetyl-L-Carnitine HCl supports brain health, enhances mental focus and cognitive function by aiding in the production of acetylcholine, a key neurotransmitter. It also helps convert fat into energy in the body.'),
('N-Acetyl-L-Tyrosine', 'N-Acetyl-L-Tyrosine is a supplement used to increase attention, motivation, and concentration. It\'s also believed to reduce stress levels. It works by boosting neurotransmitters in the brain, like dopamine and adrenaline.');

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
(74892705296, 'Optimum Nutrition Gold Standard Pre-Workout 300g'),
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
(74892705296, 48291),
(74892705296, 13724),
(74892705296, 50382),
(74892705296, 41976),
(74892705296, 26548),
(74892705296, 34197),
(74892705296, 14029),
(74892705296, 67250),
(74892705296, 12973),
(74892705296, 21387),
(74892705296, 37842),
(74892705296, 15462),
(74892705296, 60781),
(74892705296, 23058),
(74892705296, 49876),
(74892705296, 75920),
(74892705296, 86173),
(74892705296, 39041),
(74892705296, 10284),
(74892705296, 27635),
(74892705296, 58132),
(74892705296, 98324),
(74892705296, 47462),
(74892705296, 31289),
(74892705296, 66501),
(74892705296, 78945),
(74892705296, 54986),
(74892705296, 95675),
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

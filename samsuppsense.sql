-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 12:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
(95675, 'Sunset Yellow FCF'),
(69770, 'test'),
(16669, 'Carbonated Water'),
(27239, 'Erythritol'),
(27256, 'Taurine'),
(33015, 'Sodium Citrate'),
(37526, 'Natural & Artificial Flavors'),
(39438, 'Panax Ginseng Extract'),
(40146, 'L-Carnitine L-Tartrate'),
(42493, 'Caffeine'),
(47801, 'Sucralose'),
(48627, 'Acesulfame Potassium'),
(56101, 'Sorbic Acid (Preservative)'),
(60872, 'Benzoic Acid (Preservative)'),
(60875, 'Niacinamide (Vitamin B3)'),
(65456, 'D-Calcium Pantothenate (Vitamin B5)'),
(67353, 'Pyridoxine Hydrochloride (Vitamin B6)'),
(74695, 'Cyanocobalamin (Vitamin B12)'),
(75961, 'Inositol'),
(78231, 'Glucuronolactone'),
(81154, 'Maltodextrin'),
(81624, 'Sodium Chloride'),
(81671, 'Guarana Seed Extract'),
(82867, 'Riboflavin (Vitamin B2)'),
(83143, 'Color Added'),
(86655, 'Sucrose'),
(91179, 'Glucose'),
(91345, 'Glycine Max'),
(91693, 'Aspartame'),
(94918, 'Neotame'),
(99040, 'Stevia');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `IngredientName` text NOT NULL,
  `Message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`IngredientName`, `Message`) VALUES
('Whey Protein Concentrate', 'Whey Protein Concentrate (WPC) supports muscle growth and may reduce inflammation. Excessive intake can lead to digestive issues, kidney or liver damage, and may be unsuitable for those with milk allergies or lactose intolerance. ([medicalnewstoday.com](https://www.medicalnewstoday.com/articles/263371?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Whole Milk Powder', 'Whole milk powder is rich in high-quality proteins, essential fats, vitamins A, D, E, and K, and minerals like calcium and phosphorus, supporting bone health and muscle function. It provides a concentrated source of energy and aids in the absorption of fat-soluble vitamins. However, individuals with lactose intolerance or milk allergies should exercise caution when consuming whole milk powder. ([thinkusadairy.org](https://www.thinkusadairy.org/products/milk-powders/health-and-nutrition?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Whey Protein Isolate', 'Whey protein isolate, a highly refined form of whey protein, is rich in essential amino acids and is commonly used to support muscle growth and recovery. It may also help reduce inflammation and enhance antioxidant defenses. However, excessive intake can lead to digestive issues, kidney strain, and other health concerns. ([medicalnewstoday.com](https://www.medicalnewstoday.com/articles/263371?utm_source=openai), [healthline.com](https://www.healthline.com/nutrition/10-health-benefits-of-whey-protein?utm_source=openai), [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/32702243/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Skim Milk Powder', 'Skim milk powder is a low-fat, high-protein dairy product rich in calcium and essential vitamins, supporting bone health and muscle function. It aids in weight management by promoting satiety and may help regulate blood sugar levels. However, individuals with lactose intolerance should consume it cautiously due to its lactose content. ([foodfactshub.com](https://foodfactshub.com/skim-milk-powder-nutrition-facts/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Soy Lecithin', 'Soy lecithin, derived from soybeans, is commonly used as an emulsifier in foods and supplements. It may support brain health by providing choline, which is essential for cognitive function. Additionally, it can help lower LDL cholesterol levels, potentially reducing the risk of heart disease. ([webmd.com](https://www.webmd.com/diet/health-benefits-lecithin/?utm_source=openai), [healthline.com](https://www.healthline.com/health/food-nutrition/is-soy-lecithin-good-or-bad-for-me?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Sunflower Lecithin', 'Sunflower lecithin supports brain health by providing choline, essential for memory and cognitive function. It aids digestion by emulsifying fats, enhancing nutrient absorption. Additionally, it promotes heart health by lowering LDL cholesterol levels. ([healthnews.com](https://healthnews.com/nutrition/vitamins-and-supplements/sunflower-lecithin-benefits-uses-side-effects//?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Dextrose', 'Dextrose is a simple sugar that rapidly increases blood sugar levels, providing quick energy. Excessive consumption can lead to weight gain, insulin resistance, and increased risk of type 2 diabetes. Individuals with diabetes should monitor their blood sugar levels when consuming dextrose. ([webmd.com](https://www.webmd.com/diet/what-to-know-dextrose?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Inulin', 'Inulin is a prebiotic fiber that enhances gut health by promoting beneficial bacteria growth, aids digestion, and may improve blood sugar control. It can also support weight management and increase mineral absorption. However, excessive intake may cause digestive discomfort. ([webmd.com](https://www.webmd.com/vitamins-and-supplements/inulin-uses-and-risks?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Flavours', 'Flavours, both natural and artificial, are commonly used to enhance the taste and aroma of foods and beverages. While they can improve sensory experiences, certain artificial flavours have been associated with adverse health effects, including allergic reactions, headaches, and potential long-term health risks. It\'s advisable to consume products containing artificial flavours in moderation and be aware of their presence in processed foods. ([who.int](https://www.who.int/news-room/fact-sheets/detail/food-additives/?utm_source=openai), [communitynurse.org](https://www.communitynurse.org/news/health-and-fitness/artificial-flavouring-what-you-need-to-know-about-its-impact-on-your-health/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Guar Gum', 'Guar gum, a soluble fiber, aids digestion by normalizing stool consistency and may lower cholesterol levels. Excessive intake can cause gastrointestinal discomfort, and rare allergic reactions have been reported. It\'s generally safe when consumed in moderation. ([healthline.com](https://www.healthline.com/nutrition/guar-gum?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Papain', 'Papain, an enzyme from papaya, aids digestion by breaking down proteins, potentially alleviating bloating and indigestion. It may also support wound healing by removing dead tissue and reducing inflammation. However, excessive intake can cause throat and stomach damage, and topical application may lead to skin irritation. ([webmd.com](https://www.webmd.com/vitamins/ai/ingredientmono-69/papain?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Caffeine (from tea and/or coffee beans)', 'Caffeine, found in tea and coffee, stimulates the central nervous system, enhancing alertness and energy levels. Excessive intake can lead to side effects such as insomnia, jitteriness, and increased heart rate. Moderate consumption is generally safe for most adults. ([medlineplus.gov](https://medlineplus.gov/caffeine.html?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Creatine Monohydrate (Creapure®)', 'Creatine Monohydrate (Creapure®) enhances high-intensity exercise performance by increasing muscle energy availability, leading to improved strength and muscle mass. It also aids in faster recovery post-exercise. Generally, it is safe with minimal side effects, though some individuals may experience weight gain due to water retention. ([creapure.com](https://www.creapure.com/en/creatine-overview?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Beta-Alanine (as CarnoSyn®)', 'Beta-Alanine, as CarnoSyn®, enhances athletic performance by increasing muscle carnosine levels, which buffer acid buildup during high-intensity exercise, delaying fatigue and improving endurance. It also supports cognitive function and offers antioxidant benefits. ([carnosyn.com](https://www.carnosyn.com/how-carnosyn-works-beta-alanines-mechanism-of-action-in-the-body/?utm_source=openai), [nai-online.com](https://www.nai-online.com/news_and_events/newly-published-study-shows-sr-carnosyn-beta-alanine-improves-cognitive-function-in-older-adults/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Micronized L-Citrulline', 'Micronized L-Citrulline enhances nitric oxide production, leading to improved blood flow and reduced blood pressure. It may also boost exercise performance and aid in muscle recovery. Additionally, it has been studied for potential benefits in treating erectile dysfunction. ([healthline.com](https://www.healthline.com/nutrition/citrulline-supplements?utm_source=openai), [health.clevelandclinic.org](https://health.clevelandclinic.org/citrulline-benefits?utm_source=openai), [healthline.com](https://www.healthline.com/health/erectile-dysfunction/l-citrulline?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Acetyl-L-Carnitine HCl', 'Acetyl-L-Carnitine HCl aids in energy production by transporting fatty acids into cells for ATP synthesis. It supports brain health, potentially improving cognitive function and reducing symptoms of depression. Additionally, it may alleviate nerve pain and enhance exercise performance. ([webmd.com](https://www.webmd.com/vitamins/ai/ingredientmono-834/acetyl-l-carnitine/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('N-Acetyl-L-Tyrosine', 'N-Acetyl-L-Tyrosine (NALT) is a modified form of the amino acid L-tyrosine, which serves as a precursor to neurotransmitters like dopamine, norepinephrine, and epinephrine. Supplementing with NALT may enhance cognitive performance, improve mood, and support stress management. However, some individuals might experience side effects such as nausea, headache, or gastrointestinal discomfort. ([synapse.patsnap.com](https://synapse.patsnap.com/article/what-are-the-side-effects-of-n-acetyl-l-tyrosine?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Citrus Bioflavonoids Complex', 'Citrus bioflavonoids complex, derived from citrus fruits, offers antioxidant and anti-inflammatory benefits that support cardiovascular health, enhance immune function, and improve skin health. ([herbalpharmacist.com](https://herbalpharmacist.com/the-health-benefits-of-citrus-bioflavonoids/?utm_source=openai)) Additionally, they may aid in regulating blood sugar levels and reducing oxidative stress, potentially benefiting individuals with type 2 diabetes. ([pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/37939436/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('AstraGIN® (Astragalus membranaceus and Panax notoginseng)', 'AstraGin® enhances nutrient absorption, supports gut health by improving intestinal barrier integrity, and promotes a balanced gut microbiome. ([nulivscience.com](https://nulivscience.com/ingredients/astragin/?utm_source=openai)) It also boosts immune function and may aid in protein synthesis. ([nulivscience.com](https://nulivscience.com/astragin-protein-absorption/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Vitamin D (as Cholecalciferol)', 'Vitamin D (cholecalciferol) is essential for calcium absorption, promoting strong bones and teeth. It supports immune function, muscle strength, and may influence mood regulation. Deficiency can lead to bone disorders like rickets and osteomalacia. ([akamai.mayoclinic.org](https://www.akamai.mayoclinic.org/drugs-supplements-vitamin-d/art-20363792?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Thiamin (Vitamin B1)', 'Thiamin (vitamin B1) is essential for converting carbohydrates into energy, supporting nerve function, and maintaining heart health. Deficiency can lead to symptoms like fatigue, confusion, and nerve damage. It\'s found in whole grains, pork, and legumes. ([mountsinai.org](https://www.mountsinai.org/health-library/nutrition/thiamin?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Niacin (Vitamin B3)', 'Niacin (Vitamin B3) is essential for converting food into energy and maintaining healthy skin, nerves, and digestion. It also plays a role in lowering bad cholesterol (LDL) and increasing good cholesterol (HDL). Deficiency can lead to pellagra, characterized by skin rashes, digestive issues, and mental disturbances. ([mayoclinic.org](https://www.mayoclinic.org/drugs-supplements-niacin/art-20364984?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Vitamin B6', 'Vitamin B6 is essential for brain development, immune function, and the production of neurotransmitters like serotonin and dopamine. It aids in metabolizing proteins, fats, and carbohydrates, and is crucial for red blood cell formation. Deficiency can lead to anemia, confusion, depression, and a weakened immune system. ([mayoclinic.org](https://www.mayoclinic.org/drugs-supplements-vitamin-b6/art-20363468?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Folic Acid', 'Folic acid, a B vitamin, is essential for DNA synthesis and cell division. Adequate intake, especially during early pregnancy, helps prevent neural tube defects. It also supports red blood cell formation and may reduce the risk of certain cancers. ([cdc.gov](https://www.cdc.gov/folic-acid/about/index.html/?utm_source=openai), [mayoclinic.org](https://www.mayoclinic.org/drugs-supplements-folate/art-20364625?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Vitamin B12', 'Vitamin B12 is essential for red blood cell formation, DNA synthesis, and nerve function. Deficiency can lead to anemia, fatigue, and neurological issues. It\'s primarily found in animal products; vegetarians and vegans may need fortified foods or supplements. ([mayoclinic.org](https://www.mayoclinic.org/drugs-supplements-vitamin-b12/art-20363663?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Pantothenic Acid (Vitamin B5)', 'Pantothenic acid (vitamin B5) is essential for energy metabolism, hormone synthesis, and maintaining healthy skin, hair, and eyes. It also supports the nervous system and aids in wound healing. Deficiency is rare but can lead to fatigue, irritability, and digestive issues. ([mountsinai.org](https://www.mountsinai.org/health-library/supplement/vitamin-b5-pantothenic-acid?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Natural and Artificial Flavors', 'Natural and artificial flavors are chemical mixtures used to enhance food taste. While generally recognized as safe, they can cause allergic reactions, headaches, and other adverse effects in sensitive individuals. Due to limited disclosure requirements, consumers may be unaware of specific ingredients present in these flavorings. ([healthline.com](https://www.healthline.com/nutrition/natural-flavors?utm_source=openai), [consumerreports.org](https://www.consumerreports.org/health/food-additives/are-natural-flavors-healthier-than-artificial-flavors-a6393690728/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Citric Acid', 'Citric acid, found naturally in citrus fruits, aids in digestion and enhances mineral absorption. Excessive consumption may lead to tooth enamel erosion and gastrointestinal discomfort. Individuals with mold allergies should exercise caution with synthetic citric acid. ([webmd.com](https://www.webmd.com/diet/what-is-citric-acid?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Malic Acid', 'Malic acid, an alpha-hydroxy acid found in fruits and wines, aids in energy production and skin exfoliation. It may alleviate dry mouth and improve skin hydration. Excessive intake can cause gastrointestinal discomfort and skin irritation. ([webmd.com](https://www.webmd.com/vitamins/ai/ingredientmono-1495/malic-acid?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Silicon Dioxide', 'Silicon dioxide is generally safe when ingested, serving as an anticaking agent in foods and supplements. However, inhaling fine particles can lead to respiratory issues like silicosis and lung cancer. Recent studies suggest that nanoparticles may also affect the gut-brain axis, potentially influencing behavior. ([healthline.com](https://www.healthline.com/health/food-nutrition/is-silicon-dioxide-in-supplements-safe?utm_source=openai), [en.wikipedia.org](https://en.wikipedia.org/wiki/Silicosis?utm_source=openai), [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/38908054/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Calcium Silicate', 'Calcium silicate is generally recognized as safe (GRAS) by the FDA when used as an anti-caking agent in food products. However, excessive inhalation of its dust can irritate the respiratory system, leading to coughing and shortness of breath. Ingestion of large amounts may cause gastrointestinal discomfort, such as bloating or constipation. ([cdc.gov](https://www.cdc.gov/niosh/npg/npgd0094.html?utm_source=openai), [healthviewsonline.com](https://healthviewsonline.com/about-anti-caking-agent-calcium-silicate-e552-uses-side-effects-facts/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Cellulose Gum', 'Cellulose gum, also known as carboxymethylcellulose, is a food additive used as a thickening agent and stabilizer. While generally considered safe, excessive consumption may lead to digestive issues like bloating and diarrhea. Individuals with irritable bowel syndrome (IBS) or other gastrointestinal conditions should exercise caution. ([healthline.com](https://www.healthline.com/health/food-nutrition/cellulose-gum?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Xanthan Gum', 'Xanthan gum is a soluble fiber that can aid digestion and may help lower cholesterol levels. In large amounts, it can cause digestive issues like gas and bloating. It\'s generally safe for most people when consumed in typical food quantities. ([healthline.com](https://www.healthline.com/nutrition/xanthan-gum?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Carrageenan', 'Carrageenan, a seaweed-derived food additive, is used for thickening and stabilizing products. While generally recognized as safe by regulatory agencies, some studies suggest it may cause gastrointestinal inflammation and ulcers. Individuals with digestive disorders like ulcerative colitis are advised to avoid carrageenan. ([webmd.com](https://www.webmd.com/vitamins/ai/ingredientmono-710/carrageenan?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Sucralose', 'Sucralose is a calorie-free sweetener that may alter gut microbiota, potentially leading to increased inflammation. Some studies suggest it could affect blood sugar and insulin levels, especially in individuals with obesity. High doses have been shown to suppress immune responses in animal models. ([health.clevelandclinic.org](https://health.clevelandclinic.org/is-sucralose-splenda-bad-for-you?utm_source=openai), [webmd.com](https://www.webmd.com/diet/what-to-know-about-sucralose?utm_source=openai), [ft.com](https://www.ft.com/content/c4ccd2a3-da66-487d-9dc3-f0be9c7c91c9?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Tartaric Acid', 'Tartaric acid, a naturally occurring organic acid found in fruits like grapes, is commonly used as a food additive for its antioxidant properties and to impart a sour taste. In high doses, it can cause gastrointestinal discomfort, including nausea, vomiting, and diarrhea. Additionally, excessive consumption may lead to kidney damage and other health issues. ([efsa.onlinelibrary.wiley.com](https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2020.6030?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Acesulfame Potassium', 'Acesulfame potassium is a calorie-free sweetener approved by the FDA, commonly used in sugar-free products. While generally considered safe, some studies suggest it may disrupt gut microbiota, potentially leading to weight gain and glucose intolerance. Additionally, high consumption during pregnancy has been linked to glucose intolerance and adverse effects in offspring. ([webmd.com](https://www.webmd.com/diet/what-is-acesulfame-potassium?utm_source=openai), [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/28594855/?utm_source=openai), [jn.nutrition.org](https://jn.nutrition.org/article/S0022-3166%2822%2902238-6/fulltext?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Red 40', 'Red 40, a synthetic food dye, may cause hyperactivity, allergic reactions, and migraines in sensitive individuals. Some studies suggest links to behavioral changes in children, including those with ADHD. Additionally, Red 40 contains benzene, a known carcinogen. ([health.clevelandclinic.org](https://health.clevelandclinic.org/red-dye-40?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Sunset Yellow FCF', 'Sunset Yellow FCF, a synthetic food dye, is associated with potential health risks, including hyperactivity in children, allergic reactions, and possible genotoxic effects. Studies have shown that it can suppress immune responses and alter cell proliferation. Regulatory bodies have set acceptable daily intake levels to mitigate these risks. ([efsa.europa.eu](https://www.efsa.europa.eu/en/efsajournal/pub/1330?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Hydrolysed Collagen Peptides (Bovine)', 'Hydrolyzed bovine collagen peptides support skin elasticity, reduce wrinkles, and enhance hydration. They promote joint health by alleviating pain and improving mobility. Additionally, they aid in muscle recovery and support gut health. ([pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC11381813/?utm_source=openai), [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC7271718/?utm_source=openai), [renewskinco.com](https://www.renewskinco.com/blogs/i/bovine-collagen?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('L-Tryptophan', 'L-Tryptophan is an essential amino acid that the body uses to produce serotonin and melatonin, which regulate mood and sleep. Adequate intake supports emotional well-being and sleep quality. Deficiency may lead to mood disturbances and sleep issues. ([healthline.com](https://www.healthline.com/nutrition/tryptophan?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Vitamin C (Ascorbic Acid)', 'Vitamin C is essential for collagen synthesis, immune function, and iron absorption. It acts as an antioxidant, protecting cells from damage. Deficiency can lead to scurvy, characterized by bleeding gums and poor wound healing. ([mayoclinic.org](https://www.mayoclinic.org/drugs-supplements-vitamin-c/art-20363932?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Tartrazine', 'Tartrazine, a synthetic yellow food dye, is generally safe for most individuals. However, some may experience allergic reactions, including hives and asthma symptoms. Additionally, certain studies have suggested potential links to hyperactivity in children and DNA damage, though more research is needed to confirm these effects. ([webmd.com](https://www.webmd.com/diet/what-to-know-yellow-5-food-dye?utm_source=openai), [pubmed.ncbi.nlm.nih.gov](https://pubmed.ncbi.nlm.nih.gov/25750299/?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('D-Calcium Pantothenate (Vitamin B5)', 'D-Calcium Pantothenate, or Vitamin B5, is essential for energy metabolism, converting carbohydrates, fats, and proteins into usable energy. It supports the synthesis of coenzyme A, vital for fatty acid and cholesterol production, and aids in the formation of neurotransmitters like acetylcholine, promoting nervous system health. ([mountsinai.org](https://www.mountsinai.org/health-library/supplement/vitamin-b5-pantothenic-acid?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Cyanocobalamin (Vitamin B12)', 'Cyanocobalamin (Vitamin B12) is essential for red blood cell formation, DNA synthesis, and nerve function. Deficiency can lead to anemia, fatigue, nerve damage, and cognitive issues. It\'s primarily found in animal products and is commonly used to treat B12 deficiencies. ([mayoclinic.org](https://www.mayoclinic.org/drugs-supplements-vitamin-b12/art-20363663?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>'),
('Pyridoxine Hydrochloride (Vitamin B6)', 'Pyridoxine hydrochloride (Vitamin B6) is essential for amino acid metabolism, neurotransmitter synthesis, and red blood cell formation. It supports nervous and immune system functions and helps regulate homocysteine levels, potentially reducing heart disease risk. ([mountsinai.org](https://www.mountsinai.org/health-library/supplement/vitamin-b6-pyridoxine?utm_source=openai))  \n \n  <strong>This Content has been Verified</strong>');

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
(726684130474, 'Nexus Sports Nutrition Super Protein Collagen Water'),
(748927052961, 'Optimum Nutrition Gold Standard Pre-Workout 300g'),
(9314549902192, 'Musashi High Protein Powder 900g'),
(9342866000482, 'Monster Energy Zero Ultra');

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
(726684130474, 21387),
(9342866000482, 16669),
(9342866000482, 20430),
(9342866000482, 27239),
(9342866000482, 27256),
(9342866000482, 33015),
(9342866000482, 37526),
(9342866000482, 39438),
(9342866000482, 40146),
(9342866000482, 42493),
(9342866000482, 47801),
(9342866000482, 48627),
(9342866000482, 56101),
(9342866000482, 60872),
(9342866000482, 60875),
(9342866000482, 65456),
(9342866000482, 67353),
(9342866000482, 74695),
(9342866000482, 75961),
(9342866000482, 78231),
(9342866000482, 81154),
(9342866000482, 81624),
(9342866000482, 81671),
(9342866000482, 82867),
(9342866000482, 83143),
(9342866000482, 86655),
(9342866000482, 91179),
(9342866000482, 91345),
(9342866000482, 91693),
(9342866000482, 94918),
(9342866000482, 99040);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('root', ''),
('h', 'h'),
('username', 'password');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD UNIQUE KEY `ProductID` (`ProductID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

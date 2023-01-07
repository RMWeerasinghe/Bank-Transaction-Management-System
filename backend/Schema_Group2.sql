-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: bank
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `account_no` varchar(10) NOT NULL,
  `type` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`account_no`),
  CONSTRAINT `account_chk_1` CHECK ((`type` in (_utf8mb4'savings',_utf8mb4'current')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('1810015001','savings'),('1810015002','savings'),('1810015003','savings'),('1810015004','savings'),('1810015005','savings'),('1810015006','savings'),('1810015007','savings'),('1810015008','savings'),('1810015009','savings'),('8008024001','current'),('8008024002','current');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atm`
--

DROP TABLE IF EXISTS `atm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atm` (
  `atm_id` varchar(8) NOT NULL,
  `town` varchar(20) DEFAULT NULL,
  `branch_code` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`atm_id`),
  KEY `branch_code` (`branch_code`),
  CONSTRAINT `atm_ibfk_1` FOREIGN KEY (`branch_code`) REFERENCES `branch` (`branch_code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atm`
--

LOCK TABLES `atm` WRITE;
/*!40000 ALTER TABLE `atm` DISABLE KEYS */;
INSERT INTO `atm` VALUES ('0001','Colombo Fort','300'),('0002','Negombo','302'),('0003','Negombo','302'),('0004','Nugegoda','302'),('0005','Kelaniya','303'),('0006','Kelaniya','304'),('0007','Grandpass','304'),('0008','Kollupitiya','305'),('0009','Kollupitiya','306'),('0010','Bambalapitiya','300'),('0011','Ahangama','301');
/*!40000 ALTER TABLE `atm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atm_transaction`
--

DROP TABLE IF EXISTS `atm_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atm_transaction` (
  `transaction_id` varchar(8) NOT NULL,
  `account_no` varchar(10) DEFAULT NULL,
  `atm_id` varchar(8) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `transaction_time` datetime DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `account_no` (`account_no`),
  CONSTRAINT `atm_transaction_ibfk_1` FOREIGN KEY (`account_no`) REFERENCES `account` (`account_no`) ON DELETE CASCADE,
  CONSTRAINT `atm_transaction_chk_1` CHECK ((`type` in (_utf8mb4'deposit',_utf8mb4'withdrawl')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atm_transaction`
--

LOCK TABLES `atm_transaction` WRITE;
/*!40000 ALTER TABLE `atm_transaction` DISABLE KEYS */;
INSERT INTO `atm_transaction` VALUES ('10001','1810015001','0011',25000.00,'2022-11-24 07:08:55','deposit'),('10002','1810015009','0006',10000.00,'2022-11-24 13:15:50','withdrawl'),('10003','8008024001','0009',40000.00,'2022-11-24 14:20:58','deposit'),('10004','1810015005','0002',38000.00,'2022-11-24 17:15:50','deposit');
/*!40000 ALTER TABLE `atm_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch` (
  `branch_code` varchar(4) NOT NULL,
  `branch_name` varchar(50) NOT NULL,
  `branch_city` varchar(20) DEFAULT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`branch_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES ('300','Commercial Bank-Head Office','Colombo Fort','0112240040','headoffice@combank.com'),('301','Commercial Bank-Ahangama','Ahangama','032255140','ahangama.mgr@combank.com'),('302','Commercial Bank-Negombo','Negombo','0312239240','negombo.mgr@combank.com'),('303','Commercial Bank-Nugegoda','Nugegoda','0112258240','nugegoda.mgr@combank.com'),('304','Commercial Bank-Kelaniya','Kelaniya','0112241040','kelaniya.mgr@combank.com'),('305','Commercial Bank-Jaffna','Jaffna','0212255040','jaffana.mgr@combank.com'),('306','Commercial Bank-Narahenpita','Colombo 05','0112239040','colombo05.mgr@combank.com');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch_manager`
--

DROP TABLE IF EXISTS `branch_manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch_manager` (
  `branch_code` varchar(4) NOT NULL,
  `employee_id` varchar(8) NOT NULL,
  PRIMARY KEY (`branch_code`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `branch_manager_ibfk_1` FOREIGN KEY (`branch_code`) REFERENCES `branch` (`branch_code`) ON DELETE CASCADE,
  CONSTRAINT `branch_manager_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch_manager`
--

LOCK TABLES `branch_manager` WRITE;
/*!40000 ALTER TABLE `branch_manager` DISABLE KEYS */;
INSERT INTO `branch_manager` VALUES ('300','2000001'),('302','2000004'),('306','2000005'),('304','2000006'),('303','2000007'),('301','2000008'),('305','2000009');
/*!40000 ALTER TABLE `branch_manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `child_customer`
--

DROP TABLE IF EXISTS `child_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `child_customer` (
  `customer_id` varchar(8) NOT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `middle_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(8) DEFAULT NULL,
  `nationality` varchar(10) DEFAULT NULL,
  `guardian_first_name` varchar(20) DEFAULT NULL,
  `guardian_middle_name` varchar(20) DEFAULT NULL,
  `guardian_last_name` varchar(20) DEFAULT NULL,
  `guardian_NIC` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  CONSTRAINT `child_customer_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `child_customer`
--

LOCK TABLES `child_customer` WRITE;
/*!40000 ALTER TABLE `child_customer` DISABLE KEYS */;
INSERT INTO `child_customer` VALUES ('340008','Chanya','Rochelle','Diana','2010-11-05','female','Sri Lankan','Sulani','Fonseka','Alwis','925001220v'),('340009','Kasun','Dewneth','Pathirana','2014-07-27','male','Canadian','Kusal','Niwen','Silva','887121520v'),('340010','Shakya','Dineth','Jayasekara','2016-03-08','male','Sri Lanka','Kamani','Jayantha','Perera','906001759v');
/*!40000 ALTER TABLE `child_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `current_account`
--

DROP TABLE IF EXISTS `current_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `current_account` (
  `account_no` varchar(10) NOT NULL,
  `branch_code` varchar(4) NOT NULL,
  `balance` decimal(10,2) DEFAULT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`account_no`),
  KEY `branch_code` (`branch_code`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `current_account_ibfk_1` FOREIGN KEY (`branch_code`) REFERENCES `branch` (`branch_code`),
  CONSTRAINT `current_account_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE,
  CONSTRAINT `current_account_ibfk_3` FOREIGN KEY (`account_no`) REFERENCES `account` (`account_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `current_account`
--

LOCK TABLES `current_account` WRITE;
/*!40000 ALTER TABLE `current_account` DISABLE KEYS */;
INSERT INTO `current_account` VALUES ('8008024001','302',845000.00,'340002'),('8008024002','304',220000.00,'340007');
/*!40000 ALTER TABLE `current_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` varchar(8) NOT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `type` varchar(6) DEFAULT NULL,
  `address_no` varchar(8) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  `town` varchar(20) DEFAULT NULL,
  `hash_password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('340001','0771528726','Dian@gmail.com','ind','520/C','Athula Road','Makola','#95ABHC1'),('340002','0752015900','sanathrj@gmail.com','ind','480/B','Lotus Road','Pelawatta','?>AZJKh9'),('340003','0761581620','kalani@gmail.com','ind','512','Main Street','Jaffna','95A5468?'),('340004','0703366920','sunil@yahoo.com','ind','280/B','First lane','kelaniya','!^ZH?7B9'),('340005','0312247512','sttraders@gmail.com','org','17/C','Chilaw Road','Negambo','2AGKJ6?h'),('340006','0112250050','mail@jiya.lk','org','158','Main Street','Colombo-10','m?S9K.TPh'),('340007','0342251270','manelenterprises@hotmail.com','org','16/A','Galle Rd','Aluthgama','EBF><5h'),('340008','0312250812','sulani@gmail.com','ind','200','second lane','Dehiwala','AHK?H59h'),('340009','0775020190','Kusal@gmail.com','ind','15/C','teak road','Aluthgama','BP?SK78#'),('340010','0768012200','kamanirp@gmail.com','ind','20/A','Search Place','Jaffna','#ASPRT5V');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` varchar(8) NOT NULL,
  `emp_name` varchar(50) NOT NULL,
  `branch_code` varchar(4) DEFAULT NULL,
  `contact_number` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address_no` varchar(8) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  `town` varchar(20) DEFAULT NULL,
  `hash_password` varchar(20) DEFAULT NULL,
  `salary` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `branch_code` (`branch_code`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`branch_code`) REFERENCES `branch` (`branch_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('2000001','S.K.Subaskaran','305','0771528870','sksuba@combank.com','520','Pivet lane','Jaffna','1D#K95',200000.00),('2000002','P.K.T.Perera','301','0765009058','pktperera@combank.com','17/8','Samagi Mawatha','Ahangama','AB?K19',250000.00),('2000003','N.S.Silva','300','0784005020','nssilva@combank.com','201','Second Lane','Nugegoda','EZP1H5',800000.00),('2000004','S.D.Alwis','302','0723152179','sdalwis@combank.com','309/05','Jaya para','Seeduwa','AZ?#5H',150000.00),('2000005','A.A.Mafaris','306','0707009080','aamafaris@combank.com','16','Flower Road','Kelaniya','BAha59',125000.00),('2000006','A.H.Chandrasena','304','0712568150','ahchandrasena@combank.com','320','Union square','Kadawatha','KBh#?a',110000.00),('2000007','K.N.Rajapaksha','303','0771520310','knrajapaksha@combank.com','14/c','First Love','Battaramulla','FrH98',140000.00),('2000008','M.K.S.Perera','301','0789085512','mksperera@combank.com','158','Tissa Road','Peradeniya','HJK6*3',240000.00),('2000009','S.H.Arosh','306','0755209015','sharosha@combank.com','300','Second Lane','Wellawaththa','LB5?I8',180000.00);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fd_interest`
--

DROP TABLE IF EXISTS `fd_interest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fd_interest` (
  `period_in_months` int NOT NULL,
  `interest_rate` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`period_in_months`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fd_interest`
--

LOCK TABLES `fd_interest` WRITE;
/*!40000 ALTER TABLE `fd_interest` DISABLE KEYS */;
INSERT INTO `fd_interest` VALUES (6,13.00),(12,14.00),(36,15.00);
/*!40000 ALTER TABLE `fd_interest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fixed_deposit`
--

DROP TABLE IF EXISTS `fixed_deposit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fixed_deposit` (
  `fd_id` varchar(8) NOT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  `branch_code` varchar(4) DEFAULT NULL,
  `savings_acc_no` varchar(10) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `date_opened` date DEFAULT NULL,
  `period_in_months` int DEFAULT NULL,
  `matuarity_date` date GENERATED ALWAYS AS ((`date_opened` + interval `period_in_months` month)) VIRTUAL,
  PRIMARY KEY (`fd_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `fixed_deposit_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fixed_deposit`
--

LOCK TABLES `fixed_deposit` WRITE;
/*!40000 ALTER TABLE `fixed_deposit` DISABLE KEYS */;
INSERT INTO `fixed_deposit` (`fd_id`, `customer_id`, `branch_code`, `savings_acc_no`, `amount`, `date_opened`, `period_in_months`) VALUES ('200401','340005','301','1810015007',1000000.00,'2022-10-10',36),('200402','340006','305','1810015008',1500000.00,'2022-08-20',12),('200403','340001','300','1810015001',1000000.00,'2021-11-11',36),('200404','340009','306','1810015005',500000.00,'2022-05-25',12),('200405','340002','304','1810015009',1000000.00,'2020-01-20',36);
/*!40000 ALTER TABLE `fixed_deposit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `individual_customer`
--

DROP TABLE IF EXISTS `individual_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `individual_customer` (
  `customer_id` varchar(8) NOT NULL,
  `NIC` varchar(12) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `middle_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(8) DEFAULT NULL,
  `nationality` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  CONSTRAINT `individual_customer_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `individual_customer`
--

LOCK TABLES `individual_customer` WRITE;
/*!40000 ALTER TABLE `individual_customer` DISABLE KEYS */;
INSERT INTO `individual_customer` VALUES ('340001','725880315v','Sunil','Sarath','Fernando','1972-10-20','male','Sri Lanka'),('340002','842000910v','Jagath','Shantha','Jayasekara','1984-06-05','male','Sri Lanka'),('340003','96100511v','Kusum','Sagarika','De Silva','1996-03-31','female','Sri Lanka'),('340004','792004050V','Shriyani','Ann','Wijerathna','1972-01-07','female','Sri Lanka');
/*!40000 ALTER TABLE `individual_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan` (
  `loan_no` varchar(8) NOT NULL,
  `branch_code` varchar(4) DEFAULT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  `date_issued` date DEFAULT NULL,
  `period` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `interest_rate` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`loan_no`),
  KEY `branch_code` (`branch_code`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`branch_code`) REFERENCES `branch` (`branch_code`),
  CONSTRAINT `loan_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan`
--

LOCK TABLES `loan` WRITE;
/*!40000 ALTER TABLE `loan` DISABLE KEYS */;
INSERT INTO `loan` VALUES ('15100401','300','340001','2022-01-20',60000,2.00,15.50),('15100402','305','340006','2022-10-10',120000,2.00,15.50),('15100403','304','340003','2022-05-09',500000,3.00,18.00);
/*!40000 ALTER TABLE `loan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan_application`
--

DROP TABLE IF EXISTS `loan_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan_application` (
  `application_id` varchar(8) NOT NULL,
  `employee_id` varchar(8) DEFAULT NULL,
  `branch_code` varchar(4) DEFAULT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `period_in_months` int DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`application_id`),
  KEY `employee_id` (`employee_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `loan_application_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `loan_application_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE,
  CONSTRAINT `loan_application_chk_1` CHECK ((`status` in (_utf8mb4'pending',_utf8mb4'approved')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan_application`
--

LOCK TABLES `loan_application` WRITE;
/*!40000 ALTER TABLE `loan_application` DISABLE KEYS */;
INSERT INTO `loan_application` VALUES ('11201','2000006','304','340007',500000.00,1,'pending'),('11202','2000004','302','340002',1000000.00,2,'approved');
/*!40000 ALTER TABLE `loan_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan_installment`
--

DROP TABLE IF EXISTS `loan_installment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan_installment` (
  `installment_id` varchar(8) NOT NULL,
  `loan_no` varchar(8) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `paid_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`installment_id`),
  KEY `loan_no` (`loan_no`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `loan_installment_ibfk_1` FOREIGN KEY (`loan_no`) REFERENCES `loan` (`loan_no`) ON DELETE CASCADE,
  CONSTRAINT `loan_installment_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE,
  CONSTRAINT `loan_installment_chk_1` CHECK ((`status` in (_utf8mb4'paid',_utf8mb4'not paid')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan_installment`
--

LOCK TABLES `loan_installment` WRITE;
/*!40000 ALTER TABLE `loan_installment` DISABLE KEYS */;
INSERT INTO `loan_installment` VALUES ('9001','15100401',1000000.00,'2022-11-08','2022-11-05','paid','340001'),('9002','15100402',2000000.00,'2022-11-10','2022-11-10','paid','340006'),('9003','15100403',2000000.00,NULL,'2022-11-10','not paid','340003');
/*!40000 ALTER TABLE `loan_installment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `online_loan_application`
--

DROP TABLE IF EXISTS `online_loan_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `online_loan_application` (
  `application_id` varchar(8) NOT NULL,
  `branch_code` varchar(4) DEFAULT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `period_in_months` int DEFAULT NULL,
  `fd_id` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`application_id`),
  KEY `fd_id` (`fd_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `online_loan_application_ibfk_1` FOREIGN KEY (`fd_id`) REFERENCES `fixed_deposit` (`fd_id`) ON DELETE CASCADE,
  CONSTRAINT `online_loan_application_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_loan_application`
--

LOCK TABLES `online_loan_application` WRITE;
/*!40000 ALTER TABLE `online_loan_application` DISABLE KEYS */;
INSERT INTO `online_loan_application` VALUES ('2665','302','340005',800000.00,12,'200401'),('2666','301','340001',600000.00,24,'200403'),('2667','305','340009',250000.00,12,'200404'),('2668','304','340002',300000.00,36,'200405');
/*!40000 ALTER TABLE `online_loan_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `online_transaction`
--

DROP TABLE IF EXISTS `online_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `online_transaction` (
  `transaction_id` varchar(8) NOT NULL,
  `from_acc` varchar(10) DEFAULT NULL,
  `to_acc` varchar(10) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `transaction_time` datetime DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `to_acc` (`to_acc`),
  KEY `from_acc` (`from_acc`),
  CONSTRAINT `online_transaction_ibfk_1` FOREIGN KEY (`to_acc`) REFERENCES `account` (`account_no`) ON DELETE CASCADE,
  CONSTRAINT `online_transaction_ibfk_2` FOREIGN KEY (`from_acc`) REFERENCES `account` (`account_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_transaction`
--

LOCK TABLES `online_transaction` WRITE;
/*!40000 ALTER TABLE `online_transaction` DISABLE KEYS */;
INSERT INTO `online_transaction` VALUES ('1001','1810015002','1810015005',10000.00,'2022-11-24 06:11:30'),('1002','1810015004','1810015006',40000.00,'2022-11-24 08:50:40'),('1003','1810015008','1810015003',70000.00,'2022-11-24 10:50:12'),('1004','1810015009','1810015004',25000.00,'2022-11-24 12:11:58');
/*!40000 ALTER TABLE `online_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization_customer`
--

DROP TABLE IF EXISTS `organization_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization_customer` (
  `customer_id` varchar(8) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  CONSTRAINT `organization_customer_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization_customer`
--

LOCK TABLES `organization_customer` WRITE;
/*!40000 ALTER TABLE `organization_customer` DISABLE KEYS */;
INSERT INTO `organization_customer` VALUES ('340005','ST traders'),('340006','jiya'),('340007','Manel Enterprises');
/*!40000 ALTER TABLE `organization_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `savings_acc_type`
--

DROP TABLE IF EXISTS `savings_acc_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `savings_acc_type` (
  `type` varchar(8) NOT NULL,
  `interest_rate` decimal(4,2) DEFAULT NULL,
  `min_balance` decimal(6,2) DEFAULT NULL,
  `max_withdrawls` int DEFAULT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `savings_acc_type`
--

LOCK TABLES `savings_acc_type` WRITE;
/*!40000 ALTER TABLE `savings_acc_type` DISABLE KEYS */;
INSERT INTO `savings_acc_type` VALUES ('Adult',10.00,1000.00,5),('Children',12.00,0.00,0),('Senior',13.00,1000.00,5),('Teen',11.00,500.00,5);
/*!40000 ALTER TABLE `savings_acc_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `savings_account`
--

DROP TABLE IF EXISTS `savings_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `savings_account` (
  `account_no` varchar(10) NOT NULL,
  `branch_code` varchar(4) NOT NULL,
  `balance` decimal(10,2) DEFAULT NULL,
  `type` varchar(8) DEFAULT NULL,
  `customer_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`account_no`),
  KEY `branch_code` (`branch_code`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `savings_account_ibfk_1` FOREIGN KEY (`branch_code`) REFERENCES `branch` (`branch_code`),
  CONSTRAINT `savings_account_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE,
  CONSTRAINT `savings_account_ibfk_3` FOREIGN KEY (`account_no`) REFERENCES `account` (`account_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `savings_account`
--

LOCK TABLES `savings_account` WRITE;
/*!40000 ALTER TABLE `savings_account` DISABLE KEYS */;
INSERT INTO `savings_account` VALUES ('1810015001','300',238000.00,'Senior','340001'),('1810015002','304',650000.00,'Adult','340003'),('1810015003','302',85000.00,'Teen','340004'),('1810015004','303',120000.00,'Children','340008'),('1810015005','306',25000.00,'Children','340009'),('1810015006','300',15000.00,'Children','340010'),('1810015007','301',120000.00,'Senior','340005'),('1810015008','305',150000.00,'Senior','340006'),('1810015009','304',400000.00,'Senior','340002');
/*!40000 ALTER TABLE `savings_account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 21:56:57

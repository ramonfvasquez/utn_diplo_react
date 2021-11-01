CREATE DATABASE  IF NOT EXISTS `quinto_piso` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `quinto_piso`;
-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: quinto_piso
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

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
-- Table structure for table `actores`
--

DROP TABLE IF EXISTS `actores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `actores` (
  `id_actor` int NOT NULL AUTO_INCREMENT,
  `nombre_completo` varchar(100) NOT NULL,
  `cv` text NOT NULL,
  PRIMARY KEY (`id_actor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actores`
--

LOCK TABLES `actores` WRITE;
/*!40000 ALTER TABLE `actores` DISABLE KEYS */;
INSERT INTO `actores` VALUES (1,'Actor 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.'),(2,'Actor 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.'),(3,'Actor 3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.'),(4,'Actor 4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.');
/*!40000 ALTER TABLE `actores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-01 15:30:08

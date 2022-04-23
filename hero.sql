-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: projet2
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hero`
--

DROP TABLE IF EXISTS `hero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `speed` int NOT NULL,
  `strength` int NOT NULL,
  `stamina` int NOT NULL,
  `gender` varchar(100) NOT NULL,
  `race` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero`
--

LOCK TABLES `hero` WRITE;
/*!40000 ALTER TABLE `hero` DISABLE KEYS */;
INSERT INTO `hero` VALUES (1,'Ant-Man','https://zupimages.net/up/20/46/9sjo.png',23,42,81,'Male','Human'),(2,'Batgirl','https://zupimages.net/up/20/45/1foq.png',33,85,40,'Female','Human'),(3,'Batman','https://zupimages.net/up/20/45/q0kq.png',29,83,63,'Male','Human'),(5,'Black Widow','https://zupimages.net/up/20/46/twkj.png',33,13,86,'Female','Human'),(6,'Black Panther','https://zupimages.net/up/20/45/eg1f.png',30,51,81,'Male','Human'),(7,'Bumblebee','https://zupimages.net/up/20/46/30w7.png',55,99,75,'Male','Robot'),(8,'Captain America','https://zupimages.net/up/20/47/t70s.png',38,86,55,'Male','Human'),(9,'Catwoman','https://zupimages.net/up/20/45/ku3m.png',33,45,87,'Female','Human'),(10,'Chuck Norris','https://zupimages.net/up/20/46/q5g9.png',47,100,80,'Male','Human'),(11,'Daredevil','https://zupimages.net/up/20/45/35em.png',82,61,35,'Male','Human'),(12,'Deadpool','https://zupimages.net/up/20/47/ie06.png',50,32,100,'Male','Mutant'),(13,'Elastigirl','https://zupimages.net/up/20/46/lpdr.png',86,32,80,'Female','Human'),(14,'Flash','https://zupimages.net/up/20/47/e77d.jpg',100,50,23,'Male','Human'),(15,'Harley Quinn','https://zupimages.net/up/20/47/117o.png',33,12,90,'Female','Human'),(16,'Hellboy','https://zupimages.net/up/20/45/nv9p.png',21,86,75,'Male','Deamon'),(17,'Hulk','https://zupimages.net/up/20/46/pl78.png',63,99,75,'Male','Radiation'),(18,'Iron Man','https://zupimages.net/up/20/45/o7ov.png',58,100,76,'Male','Human'),(19,'Joker','https://zupimages.net/up/20/46/89gj.png',10,12,82,'Male','Human'),(20,'Judge Dredd','https://zupimages.net/up/20/46/kxev.png',50,87,80,'Male','Human'),(21,'Kick-Ass','https://www.zupimages.net/up/20/44/t1qm.png',25,30,84,'Male','Human'),(22,'Legolas','https://zupimages.net/up/20/46/m359.png',45,22,90,'Male','Elfe'),(23,'Mystique','https://zupimages.net/up/20/46/1cm3.png',23,12,81,'Male','Mutant'),(24,'Spider-Man','https://zupimages.net/up/20/45/v9zn.png',86,55,85,'Male','Arachnid'),(25,'Superman','https://zupimages.net/up/20/45/u5ff.png',100,75,40,'Male','Kryptonian'),(26,'Super Steph','https://zupimages.net/up/22/16/frfy.jpeg',99,70,80,'Female','Javascript'),(27,'Thor','https://zupimages.net/up/20/46/banj.png',65,90,76,'Male','Asgardian'),(28,'War Machine','https://zupimages.net/up/20/46/ikor.png',78,76,100,'Male','Human'),(29,'Wolverine','https://zupimages.net/up/20/45/not6.png',51,40,100,'Male','Mutant'),(30,'Wonder Woman','https://zupimages.net/up/20/45/nu42.png',86,76,80,'Female','Human');
/*!40000 ALTER TABLE `hero` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-23 14:18:30

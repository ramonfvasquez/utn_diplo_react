-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 31, 2021 at 07:59 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quinto_piso`
--

-- --------------------------------------------------------

--
-- Table structure for table `actores`
--

CREATE TABLE `actores` (
  `id_actor` int(11) NOT NULL,
  `nombre_completo` varchar(100) NOT NULL,
  `cv` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `actores`
--

INSERT INTO `actores` (`id_actor`, `nombre_completo`, `cv`) VALUES
(1, 'Actor 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.'),
(2, 'Actor 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.'),
(3, 'Actor 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.'),
(4, 'Actor 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus elit, fringilla porttitor magna vel, varius hendrerit nisl. Cras a lorem sed lacus scelerisque fringilla. Fusce sed iaculis dolor, in dapibus lectus. In in massa rutrum, imperdiet mauris ut, tristique ex. Proin gravida mi vitae lorem mollis, volutpat fringilla felis rutrum. Donec porttitor, massa vitae imperdiet porta, neque ante euismod mauris, ut pretium sem turpis in massa. Curabitur tristique magna nec neque pellentesque, eget ullamcorper dolor venenatis. Pellentesque interdum, turpis sit amet accumsan dapibus, nulla libero dignissim urna, sed tempor erat massa et odio. Curabitur dignissim accumsan tempus. Donec eleifend accumsan tellus sit amet posuere. Nam id nisl commodo, sagittis lacus quis, tincidunt dui. Donec erat nunc, tincidunt a lectus ut, venenatis tincidunt massa. Praesent congue dapibus nulla, sit amet commodo urna vehicula et. Aliquam tincidunt eu augue id blandit. Ut id orci in odio fermentum accumsan in vitae magna. Quisque vestibulum elit lacus, faucibus ullamcorper nisl hendrerit ac.');

-- --------------------------------------------------------

--
-- Table structure for table `elencos`
--

CREATE TABLE `elencos` (
  `id_obra` int(11) NOT NULL,
  `id_actor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `elencos`
--

INSERT INTO `elencos` (`id_obra`, `id_actor`) VALUES
(1, 1),
(1, 3),
(2, 1),
(2, 2),
(2, 4),
(3, 2),
(3, 3),
(4, 1),
(4, 4),
(5, 2),
(5, 3),
(5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `obras`
--

CREATE TABLE `obras` (
  `id_obra` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `inicio` int(4) NOT NULL,
  `fin` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `obras`
--

INSERT INTO `obras` (`id_obra`, `titulo`, `autor`, `inicio`, `fin`) VALUES
(1, 'Obra 1', 'Autor 1', 2000, 2002),
(2, 'Obra 2', 'Autor 2', 2002, 2004),
(3, 'Obra 3', 'Autor 3', 2004, 2006),
(4, 'Obra 4', 'Autor 4', 2006, 2008),
(5, 'Obra 5', 'Autor 5', 2008, 2010);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id_actor`);

--
-- Indexes for table `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id_obra`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actores`
--
ALTER TABLE `actores`
  MODIFY `id_actor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `obras`
--
ALTER TABLE `obras`
  MODIFY `id_obra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

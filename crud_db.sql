-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 06, 2023 at 11:06 PM
-- Server version: 10.3.37-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `mhs`
--

CREATE TABLE `mhs` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `nim` varchar(255) DEFAULT NULL,
  `prodi` varchar(255) DEFAULT NULL,
  `semester` int(2) DEFAULT NULL,
  `kelas` char(255) DEFAULT NULL,
  `angkatan` int(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mhs`
--

INSERT INTO `mhs` (`id`, `nama`, `nim`, `prodi`, `semester`, `kelas`, `angkatan`, `createdAt`, `updatedAt`) VALUES
(46, 'Ashari Midana', 'F1B119002', 'Fisika', 7, 'B', 2019, '2023-01-06 14:14:50', '2023-01-06 14:37:42'),
(47, 'Amar Mulia Aji', 'F1B119002', 'Fisika', 7, 'B', 2019, '2023-01-06 14:15:28', '2023-01-06 14:15:28'),
(48, 'Andri Arianto', 'F1A118002', 'Ilmu Komputer', 9, 'C', 2018, '2023-01-06 14:16:36', '2023-01-06 14:16:36'),
(49, 'Ananda Falecia', 'F1A119007', 'Ilmu Komputer', 7, 'C', 2019, '2023-01-06 14:17:06', '2023-01-06 14:17:06'),
(50, 'Farhan Nur', 'F1C119008', 'Matematika', 7, 'A', 2019, '2023-01-06 14:17:40', '2023-01-06 14:17:40'),
(51, 'Harnado', 'F1C118123', 'Matematika', 9, 'C', 2018, '2023-01-06 14:18:10', '2023-01-06 14:18:10'),
(52, 'Miftahul Jannah', 'F1A120124', 'Ilmu Komputer', 5, 'C', 2020, '2023-01-06 14:18:49', '2023-01-06 14:18:49'),
(53, 'Rindi aswandi', 'F1A120190', 'Ilmu Komputer', 5, 'C', 2020, '2023-01-06 14:19:19', '2023-01-06 14:19:19'),
(54, 'Rendi', 'F1B120211', 'Fisika', 5, 'A', 2020, '2023-01-06 14:20:04', '2023-01-06 14:20:04'),
(55, 'Taufiq', 'F1B119014', 'Fisika', 7, 'B', 2019, '2023-01-06 14:20:26', '2023-01-06 14:20:26'),
(56, 'Hamzah', 'F1C120117', 'Matematika', 5, 'B', 2019, '2023-01-06 14:20:58', '2023-01-06 14:20:58'),
(57, 'Tambah data', 'NIM', 'Tulis Prodi', 5, 'C', 2019, '2023-01-06 14:24:04', '2023-01-06 14:24:04'),
(58, 'Karim', 'F1B118003', 'Fisika', 7, 'a', 2019, '2023-01-06 14:24:52', '2023-01-06 14:24:52'),
(59, 'Anom', 'F1B112005', 'Fisika', 9, 'B', 2012, '2023-01-06 14:25:14', '2023-01-06 14:25:14'),
(60, 'Dzulham', 'F1B119003', 'Fisika', 5, 'C', 2019, '2023-01-06 14:25:46', '2023-01-06 14:25:46'),
(61, 'Ramli', 'F1B119004', 'Fisika', 7, 'B', 2019, '2023-01-06 14:26:11', '2023-01-06 14:26:11'),
(62, 'sulhajib', 'F1B118127', 'Fisika', 9, 'C', 2019, '2023-01-06 14:26:50', '2023-01-06 14:26:50'),
(63, 'Ude Rahman', 'F1B119002', 'Fisika', 9, 'C', 2019, '2023-01-06 14:27:12', '2023-01-06 14:27:12'),
(66, 'Ashari tambah data', 'F1B119002', 'Fisika', 7, 'C', 2019, '2023-01-06 14:33:38', '2023-01-06 14:33:38');

-- --------------------------------------------------------

--
-- Table structure for table `mhs_detail`
--

CREATE TABLE `mhs_detail` (
  `id` int(11) NOT NULL,
  `nik` varchar(16) DEFAULT NULL,
  `tempa_lhr` varchar(50) DEFAULT NULL,
  `tgl` date DEFAULT NULL,
  `hp` varchar(13) DEFAULT NULL,
  `jk` varchar(9) DEFAULT NULL,
  `agama` varchar(15) DEFAULT NULL,
  `wna` varchar(20) DEFAULT NULL,
  `nisn` varchar(18) DEFAULT NULL,
  `Ukuran_baju` char(2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `mhId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mhs_detail`
--

INSERT INTO `mhs_detail` (`id`, `nik`, `tempa_lhr`, `tgl`, `hp`, `jk`, `agama`, `wna`, `nisn`, `Ukuran_baju`, `createdAt`, `updatedAt`, `mhId`) VALUES
(62, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-06 07:06:50', '2023-01-06 07:07:02', NULL),
(63, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-06 12:06:50', '2023-01-06 12:06:50', NULL),
(64, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-06 12:23:16', '2023-01-06 12:23:16', NULL),
(65, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-06 13:14:05', '2023-01-06 13:14:05', NULL),
(66, '7402039300', 'Kendari', '2001-01-11', '08539548836', 'Laki-laki', 'Islam', 'Indonesia', '111111111', 'M', '2023-01-06 14:19:23', '2023-01-06 14:38:48', NULL),
(67, '2222', 'aaa', '2023-01-12', '21', 'Laki-laki', 'aa', 'aa', '22', 'a', '2023-01-06 14:37:00', '2023-01-06 14:37:42', 46);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'msib', 'msib@gmail.com', '$2a$10$wBlnCx1ZZtMuIoWJ8fzoBOcpgXfhKBRC2sobWHp3OI.Jqbhvtd4qy', '2023-01-04 08:00:53', '2023-01-04 08:00:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mhs`
--
ALTER TABLE `mhs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mhs_detail`
--
ALTER TABLE `mhs_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mhId` (`mhId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mhs`
--
ALTER TABLE `mhs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `mhs_detail`
--
ALTER TABLE `mhs_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mhs_detail`
--
ALTER TABLE `mhs_detail`
  ADD CONSTRAINT `mhs_detail_ibfk_1` FOREIGN KEY (`mhId`) REFERENCES `mhs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

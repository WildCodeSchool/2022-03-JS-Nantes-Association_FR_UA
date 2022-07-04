CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `member` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255),
  `phone` int,
  `created_at` DATE,
  `newsletter` boolean
);

CREATE TABLE `news` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `is_published` boolean,
  `photo_id` int
);

CREATE TABLE `newscontent` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` varchar(1500) NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `news_id` int
);

CREATE TABLE `photo` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `photo_name` varchar(255) NOT NULL,
  `photo_url` varchar(255) NOT NULL,
  `updated_at` DATE
);

CREATE TABLE `mosaic` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `photo_id` int
);

CREATE TABLE `language` (
  `code` varchar(5) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL
);

CREATE TABLE `content` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `body` text NOT NULL,
  `language_code` varchar(5) NOT NULL,
  `traduction_id` int
);

CREATE TABLE `traduction` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ref` varchar(255) NOT NULL
);

ALTER TABLE `mosaic` ADD FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`);

ALTER TABLE `news` ADD FOREIGN KEY (`photo_id`) REFERENCES `photo` (`id`);

ALTER TABLE `newscontent` ADD FOREIGN KEY (`news_id`) REFERENCES `news` (`id`);

ALTER TABLE `content` ADD FOREIGN KEY (`language_code`) REFERENCES `language` (`code`);

ALTER TABLE `content` ADD FOREIGN KEY (`traduction_id`) REFERENCES `traduction` (`id`);

ALTER TABLE `newscontent` ADD FOREIGN KEY (`language_code`) REFERENCES `language` (`code`);
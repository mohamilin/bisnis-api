CREATE TABLE `data_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(25) NOT NULL,
  `username` varchar(80) NOT NULL,
  `active` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `data_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(60) DEFAULT NULL,
  `premium` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `data_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trans_id` int DEFAULT NULL,
  `trans_date` datetime DEFAULT NULL,
  `user_id` varchar(25) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `qty_order` int DEFAULT NULL,
  `total_order` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `data_products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(60) DEFAULT NULL,
  `premium` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SELECT * FROM db_bisnis.data_transactions;

CREATE TABLE `data_transactions` (
  `trans_id` bigint NOT NULL AUTO_INCREMENT,
  `trans_date` datetime DEFAULT NULL,
  `user_id` varchar(25) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `qty_order` int DEFAULT NULL,
  `total_order` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`trans_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `data_users` (
  `user_id` varchar(25) NOT NULL,
  `user_name` varchar(80) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `user_id` varchar(80) DEFAULT NULL,
  `type` enum('access','refresh','resetPassword','verifyEmail') DEFAULT NULL,
  `expires` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# Finance-sheet

```sql
create database 'finance'

CREATE TABLE `user_account` (
  `total_amount` float DEFAULT NULL,
  `bank_savings` float DEFAULT NULL,
  `fund_amount` float DEFAULT NULL,
  `stock_amount` float DEFAULT NULL,
  `ali_pay` float DEFAULT NULL,
  `credit_cart_debt` float DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  `user_name` varchar(30) NOT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `spending` (
  `time` timestamp NULL DEFAULT NULL,
  `type` enum('FOOD','APPAREL','RENT','TRANSPORTATION','OTHER') NOT NULL,
  `amount` float DEFAULT NULL,
  `other_type_remarks` text,
  UNIQUE KEY `time` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

```

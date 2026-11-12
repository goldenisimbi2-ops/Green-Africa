CREATE DATABASE IF NOT EXISTS gai_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE gai_database;

CREATE TABLE IF NOT EXISTS admins (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(120) NOT NULL,
 email VARCHAR(190) NOT NULL UNIQUE,
 password_hash VARCHAR(255) NOT NULL,
 role ENUM('admin') NOT NULL DEFAULT 'admin',
 active TINYINT(1) NOT NULL DEFAULT 1,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
 id INT AUTO_INCREMENT PRIMARY KEY,
 slug VARCHAR(190) NOT NULL UNIQUE,
 title VARCHAR(255) NOT NULL,
 location VARCHAR(190),
 category VARCHAR(120),
 status VARCHAR(80),
 image_url TEXT,
 alt_text VARCHAR(255),
 overview TEXT,
 objectives JSON,
 activities JSON,
 community TEXT,
 impact TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS news (
 id INT AUTO_INCREMENT PRIMARY KEY,
 slug VARCHAR(190) NOT NULL UNIQUE,
 date_label VARCHAR(100),
 category VARCHAR(120),
 author VARCHAR(190),
 title VARCHAR(255) NOT NULL,
 image_url TEXT,
 alt_text VARCHAR(255),
 excerpt TEXT,
 body JSON,
 pdf_url TEXT,
 published TINYINT(1) NOT NULL DEFAULT 1,
 published_at DATETIME NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS resources (
 id INT AUTO_INCREMENT PRIMARY KEY,
 category VARCHAR(120),
 title VARCHAR(255) NOT NULL,
 description TEXT,
 file_url TEXT,
 published TINYINT(1) NOT NULL DEFAULT 1,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(190) NOT NULL,
 email VARCHAR(190) NOT NULL,
 phone VARCHAR(80),
 subject VARCHAR(255) NOT NULL,
 message TEXT NOT NULL,
 status ENUM('new','read','replied','archived') NOT NULL DEFAULT 'new',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS involvement_submissions (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(190) NOT NULL,
 email VARCHAR(190) NOT NULL,
 interest VARCHAR(80) NOT NULL,
 message TEXT,
 status ENUM('new','contacted','closed') NOT NULL DEFAULT 'new',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Re-import safe index creation.
-- MySQL has neither CREATE INDEX IF NOT EXISTS nor DROP INDEX IF EXISTS,
-- so each index is added only when it is not already present.
DROP PROCEDURE IF EXISTS add_index_if_missing;
DELIMITER $$
CREATE PROCEDURE add_index_if_missing(IN idx VARCHAR(64), IN tbl VARCHAR(64), IN cols VARCHAR(255))
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.statistics
    WHERE table_schema = DATABASE() AND table_name = tbl AND index_name = idx
  ) THEN
    SET @sql = CONCAT('CREATE INDEX `', idx, '` ON `', tbl, '` (', cols, ')');
    PREPARE stmt FROM @sql;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END IF;
END$$
DELIMITER ;

CALL add_index_if_missing('idx_news_published', 'news', '`published`,`published_at`');
CALL add_index_if_missing('idx_contact_status', 'contact_messages', '`status`');
CALL add_index_if_missing('idx_interest_status', 'involvement_submissions', '`status`');

DROP PROCEDURE add_index_if_missing;

-- Load the site's projects, news and resources from GAI-frontend/src/data.js:
--   npm run seed
--
-- Create the admin password with:
--   npm run create-admin -- "GAI Admin" admin@example.com "StrongPassword123!"

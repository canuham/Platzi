-- Crear las tablas

USE metro_cdmx;

DROP TABLE IF EXISTS `lines`;

CREATE TABLE `lines`(

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    
    `name` VARCHAR(10) NOT NULL,
    `color` VARCHAR(15) NOT NULL,

    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id)
    
)

DEFAULT CHARSET = utf8mb4
COLLATE = utf8mb4_unicode_ci;
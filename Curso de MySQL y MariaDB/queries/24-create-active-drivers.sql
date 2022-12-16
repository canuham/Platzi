USE metro_cdmx;

DROP TABLE IF EXISTS `active_drivers`;

CREATE TABLE `active_drivers`(

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,    
    `driver_id` BIGINT(20) UNSIGNED NOT NULL,

    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
    ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    CONSTRAINT `fk_active_drivers_drivers`
        FOREIGN KEY (`driver_id`) REFERENCES `drivers`(`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)

DEFAULT CHARSET = utf8mb4
COLLATE = utf8mb4_unicode_ci;
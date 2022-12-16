USE metro_cdmx;

DROP TABLE IF EXISTS `trains`;
DROP TABLE IF EXISTS `stations`;
DROP TABLE IF EXISTS `stations_delete`;


CREATE TABLE `trains`(

    `serial_number` VARCHAR(10) NOT NULL,
    `line_id` BIGINT(20) UNSIGNED NOT NULL,
    `type` TINYINT(4) NOT NULL,
    `year` INT(4) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (serial_number),
    CONSTRAINT `fk_train_line`
        FOREIGN KEY (`line_id`) REFERENCES `lines`(`id`)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE `stations`(

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id)
);

--Creacion de tabla para despues eliminar

CREATE TABLE `stations_delete`(

    `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id)
);
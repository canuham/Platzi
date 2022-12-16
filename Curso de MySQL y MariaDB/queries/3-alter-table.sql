USE metro_cdmx;

ALTER TABLE `stations`
MODIFY `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
ADD PRIMARY KEY(id);

-- ADD CONSTRAINT `fk_stations_trains`                                      FOREIGN KEY(`train_id`) REFERENCES `trains`(`id`)
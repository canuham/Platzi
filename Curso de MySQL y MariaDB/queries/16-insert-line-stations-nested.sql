USE metro_cdmx;

INSERT INTO `lines_stations` (line_id, station_id) 
VALUES (
    (
        SELECT `lines`.`id` 
        FROM `lines`
        WHERE `lines`.`name` = "Línea 9"
    ),
    (
        SELECT `stations`.`id`
        FROM `stations`
        WHERE `stations`.`name` = "Lázaro Cárdenas"
    )
)
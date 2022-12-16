USE metro_cdmx;

-- calcular distancias en metros

SELECT
ST_Distance_Sphere(
    POINT(-99.14912224, 19.42729875),
    POINT(-99.13303971, 19.42543703)
) AS distance;

-- calcular distancias en KM

SELECT
ST_Distance_Sphere(
    POINT(-99.14912224, 19.42729875),
    POINT(-99.13303971, 19.42543703)
) / 1000 AS distance;

-- nested

SELECT
ST_Distance_Sphere(
    (
        SELECT `location`
        FROM `locations`
        INNER JOIN `stations`
        ON `stations`.`id` = `locations`.`station_id`
        WHERE `stations`.`name` = "Balderas"       
    ),
    (
        SELECT `location`
        FROM `locations`
        INNER JOIN `stations`
        ON `stations`.`id` = `locations`.`station_id`
        WHERE `stations`.`name` = "Pino Suárez"
    )
) / 1000 AS distance;
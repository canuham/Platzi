USE metro_cdmx;

-- Selecccionar todo de una tabla

SELECT * FROM `lines`; 

-- Filtrar por columbas

SELECT id, name, color FROM `lines`;

-- Operaciones matematicas con SELECT (SELECT = console.log)

SELECT (2 + 2);

SELECT (2 + 2) AS resultado;

-- AVG = AVERAGE, Sacar promedio de una columna

SELECT AVG(year) FROM `trains`;

SELECT AVG(year) AS year_avg FROM `trains`;

-- Juntar tablas

SELECT
`lines`.`name`,
`trains`.`serial_number`
FROM `lines`
INNER JOIN `trains`
ON `lines`.`id` = `trains`.`line_id`;
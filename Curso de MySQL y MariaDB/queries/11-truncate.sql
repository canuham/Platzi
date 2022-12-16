USE metro_cdmx;

-- Modeo TRUNCATE

TRUNCATE TABLE `stations_delete`;

-- Esto es para ver como un TRUNCATE TABLE reestablece los id

INSERT INTO `stations_delete` (name) VALUES
("Lázaro Cárdens"),
("Ferería"),
("Pnttlán"),
("Tauga"),
("MartínCrrera");

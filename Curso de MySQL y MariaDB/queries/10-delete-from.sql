USE metro_cdmx;

-- Modeo DELETE FROM

DELETE FROM `stations_delete`;

-- Esto es para ver como un DELETE FROM no reestablece los id

INSERT INTO `stations_delete` (name) VALUES
("Lázaro Cárdens"),
("Ferería"),
("Pnttlán"),
("Tauga"),
("MartínCrrera");

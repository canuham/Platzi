USE metro_cdmx;

CREATE TRIGGER update_updated_at_field_lines
BEFORE UPDATE
ON `lines`
FOR EACH ROW
SET NEW.updated_at = NOW();
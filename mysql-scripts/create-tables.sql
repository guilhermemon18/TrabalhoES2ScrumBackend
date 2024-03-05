USE `trab1-db`;

-- -----------------------------------------------------
-- Table `trab1-db`.`TesteProfissional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trab1-db`.`TesteProfissional` (
  `idTesteProfissional` INT NOT NULL AUTO_INCREMENT,
  `nomeTesteProfissional` VARCHAR(45) NOT NULL,
  `nascimentoTesteProfessional` DATE NOT NULL,
  PRIMARY KEY (`idTesteProfissional`)
) ENGINE = InnoDB;

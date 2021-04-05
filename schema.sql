USE cow_farm;

CREATE TABLE `cows` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(40) NULL,
  `description` VARCHAR(300),
  PRIMARY KEY (`id`)
);


INSERT INTO `cows` (`name`,`description`) VALUES
('Al Paccino','my favorite cow');

INSERT INTO 'cows' ('name','description') VALUES
('Denzel Washington','this is my best cow');
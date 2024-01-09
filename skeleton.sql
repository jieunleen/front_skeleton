use skeleton;

CREATE TABLE IF NOT EXISTS user (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    createAt DATETIME NULL DEFAULT now(),
    PRIMARY KEY (id)
);

use skeleton;


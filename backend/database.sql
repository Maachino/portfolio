CREATE TABLE project (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
    description TEXT NULL,
      url VARCHAR(50),
      img_url VARCHAR(50),
      start_date DATE,
      end_date DATE

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE skill (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  type ENUM('hard', 'soft') NOT NULL,
  image VARCHAR(50)
);
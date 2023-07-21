
CREATE TABLE skill (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  type ENUM('hardskill', 'softskill')  DEFAULT 'hardskill',
  image VARCHAR(50)
);

CREATE TABLE project (
  id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(50),
  image VARCHAR(50),
  start_date DATE,
  end_date DATE,
  skill_id INT UNSIGNED,
  FOREIGN KEY (skill_id) REFERENCES skill (id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT into skill (name,image) 
VALUES ('HTML','../src/skillslogos/html.png'),('CSS','../src/skillslogos/css.png'),('JS','../src/skillslogos/js.png'),('REACT.JS','../src/skillslogos/react.png'),('NODE.JS','../src/skillslogos/node.png')
   ,('SQL','../src/skillslogos/sql.png'),('mySQL','../src/skillslogos/mysql.png'),('Git','../src/skillslogos/git.png'),('GitHub','../src/skillslogos/github.png');

INSERT into project (name,description,image)  VALUES('OriginsDigital','bla blaaaaa....................','../src/projectsimg/cine.png'),('CineGenius','bla blaaaaa....................','../src/projectsimg/origins.png');

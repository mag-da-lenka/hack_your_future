USE db1_lesson_data; 

-- script from Marta but upgraded by me

DESCRIBE status; 
DESCRIBE task; 
DESCRIBE user; 

SELECT *    FROM status;
SELECT *    FROM task;
SELECT *    FROM user;

SELECT id    FROM user; 
SELECT name  FROM user; 
SELECT *     FROM user limit 2;
SELECT *     FROM user LIMIT 3, 2;  

SELECT * FROM user ORDER BY name desc;
SELECT * FROM task WHERE month(created) = 10;
SELECT * FROM user WHERE name LIKE '%Pa%'; 

SELECT count(user_id)    FROM task;
SELECT sum(id)           FROM user; 
SELECT max(name)         FROM user;
SELECT max(id)           FROM user;
SELECT min(id)           FROM user; 
SELECT avg(length(name)) FROM user; 

SELECT title, created            FROM task WHERE day(created) > 15 and month(created) = 10;
SELECT title, created, user_id   FROM task WHERE user_id IS NOT NULL; 
SELECT *                         FROM task WHERE id = 10;
SELECT id, title                 FROM task WHERE id between 10 and 20; 

SELECT count(*), month(created)  FROM task GROUP BY month(created);
SELECT count(*), month(created)  FROM task WHERE day(created) > 15 GROUP BY month(created);

SELECT title, user_id, status_id FROM task LIMIT 5;
SELECT task.id                   FROM user, task; 


-- JOINS: 

SELECT task.title, user.name 
FROM task JOIN user 
ON task.user_id = user.id;  

SELECT task.title, user.name  
FROM task, user  
WHERE task.user_id = user.id; 

SELECT task.title, user.name, task.user_id, user.id 
FROM user JOIN task 
ON task.user_id = user.id 
WHERE user.name like 'pavel%'; 

-- MY VERSIONs: 

SELECT task.title AS TASK_title, user.name AS USER_name, task.user_id AS TASK_user_id, user.id AS USER_id
FROM user JOIN task 
ON task.user_id = user.id 
WHERE user.name like 'pavel%';  

SELECT  task.user_id AS TASK_user_id, 
		task.title   AS TASK_title,
        user.id      AS USER_id,
        user.name    AS USER_name
FROM    task      JOIN  user 
  ON    task.user_id =  user.id      WHERE user.name like 'p%';  
  
  
-- Magda's overview :)   
  
  
SELECT * 
FROM    user  JOIN  task       ON user.id   = task.user_id 
			  JOIN  status     ON status.id = task.status_id; 
              
SELECT task.id AS TASK_id, task.title AS TASK_title, task.status_id AS TASK_status_id, status.id AS STATUS_id, status.name AS STATUS_name, task.user_id AS TASK_user_id, user.id AS USER_id, user.name AS USER_name
FROM    user  JOIN  task       ON user.id   = task.user_id 
			  JOIN  status     ON status.id = task.status_id; 

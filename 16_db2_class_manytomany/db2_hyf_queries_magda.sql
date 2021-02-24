USE db2_lesson_data;

SELECT * FROM status; 
SELECT * FROM task;  
SELECT * FROM user;  
SELECT * FROM user_task;   

-- marta's version:  
select task.title, user.name as user_name, status.name as status_name
from task join status on status.id = task.status_id 
	join user_task on task.id = user_task.task_id 
		join user on user_task.user_id = user.id;
 
-- magda's version:  
SELECT task.title AS `TASK_title`, user.name AS `USER_name`, status.name AS `STATUS_name`
FROM task JOIN status      ON    status.id          = task.status_id 
	      JOIN user_task   ON    task.id            = user_task.task_id 
		  JOIN user        ON    user_task.user_id  = user.id ;

SELECT user.name AS `USER_name`, task.title AS `TASK_title`, status.name AS `STATUS_name` 
FROM task JOIN status      ON task.status_id        = status.id
		  JOIN user_task   ON task.id               = user_task.task_id
          JOIN user        ON user.id               = user_task.user_id; 

SELECT user.name AS `USER_name`, task.title AS `TASK_title`, status.name AS `STATUS_name` 
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
          JOIN status      ON task.status_id        =  status.id ;  
          
          




SELECT * 
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
          JOIN status      ON task.status_id        =  status.id ;  
 
 
SELECT 
user.id AS USER_id, user_task.user_id AS USER_TASK_user_id, user.name AS USER_name,
task.id AS TASK_id, user_task.task_id AS USER_TASK_task_id, task.title AS TASK_title,
task.status_id AS TASK_status_id, status.id AS STATUS_id, status.name AS STATUS_name
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
          JOIN status      ON task.status_id        =  status.id ;   

SELECT 
user.id AS USER_Id, user_task.User_id AS USER_TASK_User_id, user.name AS USER_Name,
task.id AS TASK_Id, user_task.Task_id AS USER_TASK_Task_id, task.title AS TASK_Title,
task.status_id AS TASK_Status_id, status.id AS STATUS_Id, status.name AS STATUS_Name
FROM user JOIN user_task   ON user.id               =  user_task.user_id
          JOIN task        ON user_task.task_id     =  task.id 
          JOIN status      ON task.status_id        =  status.id ;  
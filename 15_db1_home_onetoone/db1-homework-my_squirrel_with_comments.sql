-- Hello My_SQuirreLs, here is my homework ---> databases-1 (a.k.a. week 15) ---> Magda /HYF#12

USE db1_lesson_data;   -- all the comments/questions will be removed once resolved :) 

SELECT * FROM status; 
SELECT * FROM task;  --  powiązany z tabelą status przez status_id i z tabelą user przez user_id
SELECT * FROM user;   

-- 01 -- Find out how many tasks are in the task table: 
SELECT count(id) AS `number_of_tasks_in_task_table` -- with or without backticks :>
FROM task;
-- Question: Is the alias too long? Or should I leave it as descriptive as possible?
-- Question: Would count(*) be too redundant? 
-- backticks work with column aliases but not the values!!!

-- 02 -- Find out how many tasks in the task table do not have a valid due date: 
SELECT count(id) AS `tasks_in_task_table_without_valid_due_date`  
FROM task 
WHERE due_date IS NULL;  

-- 03 -- Find all the tasks that are marked as done: 
SELECT task.*, status.name
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.name = 'Done';  -- [LIKE] equals [=] 
-- or --
SELECT task.*, status.id
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.id = 3; 
-- or -- 
SELECT * 
FROM task INNER JOIN status 
ON task.status_id = status.id
WHERE status.name = 'Done'; 
-- or -- simply ...> 
SELECT title AS `done_tasks_title`, description AS `done_tasks_description`, status_id AS `done_tasks_id`
FROM task 
WHERE status_id = 3; -- not sure if this version would be enough

-- 04 -- Find all the tasks that are not marked as done:  
SELECT task.*, status.name
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.name NOT LIKE 'Done';  -- [NOT LIKE] equals [!=] equals <>
-- or --
SELECT task.*, status.id
FROM task INNER JOIN status 
ON task.status_id = status.id 
WHERE status.id NOT LIKE 3; -- also:    WHERE status.id <> 3
-- or -- 
SELECT * 
FROM task INNER JOIN status 
ON task.status_id = status.id
WHERE status.name NOT LIKE 'Done';
-- or -- simply ...> 
SELECT title AS `not_done_tasks_title`, description AS `not_done_tasks_description`, status_id AS `not_done_tasks_id`
FROM task 
WHERE status_id != 3; -- not sure if this version would be enough

-- 05 -- Get all the tasks, sorted with the most recently created first:
SELECT id, title AS `tasks_sorted_created_desc`, created 
FROM task 
ORDER BY created DESC; 

-- 06 -- Get the single most recently created task: 
SELECT id, title AS `tasks_sorted_created_desc`, created 
FROM task 
ORDER BY created DESC 
limit 1; 

-- 07 -- Get the title and due date of all tasks where the title or description contains database:  
SELECT title, due_date 
FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%';

-- 08 -- Get the title and status (as text = not integer!!!) of all tasks:   
SELECT task.title, status.name AS `status_as_text`  -- , status.id AS `status_as_integer`  
FROM task INNER JOIN status 
ON task.status_id = status.id;

-- 09 -- Get the name of each status, along with a count of how many tasks have that status:  
SELECT name AS STATUS_name, count(status.id) AS `number_of_each_status`
FROM task INNER JOIN status 
ON task.status_id = status.id 
GROUP BY status.name;

-- 10 -- Get the names of all statuses, sorted by the status with most tasks first: 
SELECT name, count(status.id) as `number_of_each_status`
FROM task INNER JOIN status 
ON task.status_id = status.id 
GROUP BY status.name 
ORDER BY count(*) DESC; 
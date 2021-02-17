CREATE DATABASE pernstack_todo;

CREATE TABLE todo(
    todo_id SERIAL Primary Key,
    description VARCHAR(255)
);
-- show tables;
use delta_app;

create table user(
    id varchar(50) primary key,
    userName varchar(50) not null,
    email varchar(50) unique not null,
    password varchar(50) not null
);
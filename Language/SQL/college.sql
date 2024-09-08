create database college;
use college;
create table student(
	rollno int primary key,
	name varchar(50),
	marks int not null,
	grade varchar(1),
	city varchar(20)
);
insert into student 
(rollno, name, marks, grade, city)
values
(101, "anil", 78, "B", "Pune"),
(102, "ankit", 80, "B", "Mumbai"),
(103, "dhruv", 87, "A", "Kolkata"),
(104, "gaurav", 58, "C", "Delhi"),
(105, "farah", 90, "A", "Goa"),
(106, "shushant", 48, "C", "Delhi");

select * from college;
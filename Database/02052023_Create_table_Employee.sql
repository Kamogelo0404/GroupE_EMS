create table employee(
id INT generated always as identity not null,
firstName VARCHAR(25) not null,
lastName VARCHAR(25) not null,
email VARCHAR(255) not null,
contactNo VARCHAR(10) not null,
primary key (id)
)
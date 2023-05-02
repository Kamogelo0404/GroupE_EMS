create table if not exists employee(
id INT generated always as identity not null,
firstName VARCHAR not null,
lastName VARCHAR not null,
email VARCHAR not null,
contactNo VARCHAR not null,
primary key (id)
)
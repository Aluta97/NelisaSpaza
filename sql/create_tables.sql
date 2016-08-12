use nelisa;

create table IF NOT EXISTS categories(
    id int primary key auto_increment,
    category char(100) not null
);

create table IF NOT EXISTS products (
    id int primary key auto_increment,
    description char(100) not null,
    category_id int,
    foreign key (category_id) references categories(id)
);

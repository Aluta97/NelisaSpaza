use nelisa;

SET FOREIGN_KEY_CHECKS=0;
drop table if exists categories;
drop table if exists products;
drop table if exists sales;
drop table if exists purcahses;

SET FOREIGN_KEY_CHECKS=1;


create table categories(
    id int primary key auto_increment,
    category char(100) not null,
    constraint uc_category UNIQUE (category)
);

create table products (
    id int primary key auto_increment,
    description char(100) not null,
    category_id int,
    foreign key (category_id) references categories(id),
    constraint uc_description UNIQUE (description)
);

create table sales (
    id int primary key auto_increment,
    selling_date char(100) not null,
    quantity decimal (10.2),
    selling_prices char(100) not null,
    prod_id int,
    foreign key (prod_id) references products(id)  
);

create table purcahses (
    id int primary key auto_increment,
    purchase_date char(100) not null,
    quantity decimal (10.2),
    cost char(100) not null,
    prod_id int,
    foreign key (prod_id) references products(id)
);

-- create table IF NOT EXISTS shops (
--   id int primary key auto_increment,
--   shop char(100) not null
-- );

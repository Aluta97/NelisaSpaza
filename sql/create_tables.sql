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

create table IF NOT EXISTS sales (
    id int primary key auto_increment,
    product varchar(100),
    quantity decimal (10.2),
    selling_prices decimal (10.2),
    selling_date date,
    prod_id int,
    foreign key (prod_id) references products(id)
);

create table IF NOT EXISTS purcahses (
    id int primary key auto_increment,
    product varchar(100),
    purchase_date date,
    quantity decimal (10.2),
    cost decimal (10.2),
    supplier_id int,
    prod_id int,
    foreign key (prod_id) references products(id)
);

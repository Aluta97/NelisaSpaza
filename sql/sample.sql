use example;

drop table if exists categories;

create table categories(
    id int primary key auto_increment,
    description char(100) not null
);

INSERT INTO `categories` (`description`) VALUES ("Sandy");
INSERT INTO `categories` (`description`) VALUES ("Tom");
INSERT INTO `categories` (`description`) VALUES ("Tina");

create table products (
    id int primary key auto_increment,
        description char(100) not null,
    price decimal(10,2),
    category_id int,
    foreign key (category_id) references categories(id)
);

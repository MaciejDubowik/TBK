CREATE TABLE Car
(
    id serial,
    model varchar(255),
    year int,
    details text,
    PRIMARY KEY (id)
);

INSERT INTO Car (model, year, details)

VALUES ('Audi A5', 2018 , 'Sportback'),
       ('Audi TT', 2016, 'Coupe'),
       ('BMW Seria 3', 2007, 'Coupe'),
       ('Subaru RZ', 2017, 'Coupe'),
       ('BMW M4', 2014, 'Coupe');
INSERT INTO department  (department_name)
VALUES ('laundry'),
       ('housekeeping'),
       ('dining'),
       ('reception'),
       ('landscaping');


INSERT INTO roles (title, salary, department_id)
VALUES ('housekeeper', 35000, 2),
       ('laundry assistant', 30000, 1),
       ('server', 40000, 3),
       ('groundskeeper', 45000, 5),
       ('receptionist', 50000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Matt', 'Hollis', 4, 5),
       ('Kate', 'Wilson', 5, 1),
       ('Xavier', 'Nelson', 1, 2),
       ('Jalen', 'Hurts', 3, 3),
       ('DeAndre', 'Hopkins', 2, 4),
       ('Caitlyn', 'Clark', 3, 3),
       ('Jennifer', 'Tilly', 1, 4),
       ('Robin', 'Lopez', 4, 5),
       ('Nick', 'Bosa', 5, 1),
       ('Marcus', 'Taylor', 2, 4);

     
       
INSERT INTO department (id, department_name)
VALUES (1, 'laundry'),
       (2, 'housekeeping'),
       (3, 'dining'),
       (4, 'reception'),
       (5, 'landscaping');


INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'housekeeper', 35,000, 2),
       (2, 'laundry assistant', 30,000, 1),
       (3, 'server', 40,000, 3),
       (4, 'groundskeeper', 45,000, 5),
       (5, 'receptionist', 50,000, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Matt', 'Hollis', 4, 5),
       (2, 'Kate', 'Wilson', 5, 1),
       (3, 'Xavier', 'Nelson', 1, 2),
       (4, 'Jalen', 'Hurts', 3, 3),
       (5, 'DeAndre', 'Hopkins', 2, 4),
       (6, 'Caitlyn', 'Clark', 3, 3),
       (7, 'Jennifer', 'Tilly', 1, 4),
       (8, 'Robin', 'Lopez', 4, 5),
       (9, 'Nick', 'Bosa', 5, 1),
       (10, 'Marcus', 'Taylor', 2, 4);

     
       
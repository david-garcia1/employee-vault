INSERT INTO department (department_name) VALUES
('Human Resources'),
('Engineering'),
('Sales');

INSERT INTO roles (title, salary, department_id) VALUES
('HR Manager', 60000, 1),
('Software Engineer', 50000, 2),
('Sales Associate', 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Smith', 2, NULL),
('Jane', 'Doe', 3, 1);
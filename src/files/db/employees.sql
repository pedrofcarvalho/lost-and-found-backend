CREATE TYPE building AS ENUM('library', 'student union', 'UCFPD');

CREATE TABLE Employees (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    venue building NOT NULL
);


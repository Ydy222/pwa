CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,   -- 고객 ID (기본키, 자동 증가)
    customer_name VARCHAR(100),                   -- 고객 이름
    contact_name VARCHAR(100),                    -- 연락처 이름
    address VARCHAR(255),                         -- 주소
    city VARCHAR(50),                             -- 도시
    postal_code VARCHAR(20),                      -- 우편 번호
    country VARCHAR(50)                           -- 국가
);shop
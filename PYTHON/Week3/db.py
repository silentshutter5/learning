import mysql.connector

from mysql.connector import Error

import pandas as pd

def create_connection(host_name,user_name,password,db_name):
    try:
        connection = mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd= password,
            database= db_name
        ) 
        print("MySQL connection has been succesful")
    except Error as error:
        print(f"Error:{error}")
        
    return connection
connection = create_connection("localhost", "root","","school")
    

def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Database created succesfully")
        
    except Error as error:
        print(f"Error: {error}")
    
query= "DROP database schol"

# database= create_database(connection, query)
def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("query succesful")
    except Error as error:
        print(f"Error: {error}")

create_tables = """
CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    dob DATE,
    phone_no VARCHAR(13)
);
"""

create_table_client = """
CREATE TABLE client(
    client_id INT PRIMARY KEY,
    client_name VARCHAR(40) NOT NULL,
    industry VARCHAR(20)
)
"""

create_table_course = """
CREATE TABLE course(
    course_id INT PRIMARY KEY,
    course_name VARCHAR(40) NOT NULL,
    level VARCHAR(2),
    start_date DATE,
    teacher INT,
    client INT
)
"""


# execute_query(connection, create_tables)
# execute_query(connection,create_table_client)
# execute_query(connection, create_table_course)

#popularing tables

pop_taecher = """
INSERT INTO teacher VALUES 
(1, 'Taedy', 'Olol', '2003-11-7', '079445273' )

"""
pop_client = """
INSERT INTO client VALUES (1, 'Joan', 'software development'),
(2, 'Shawn', 'software development'),
(3, 'Jeremiah', 'software develoment')
"""

pop_course = """
INSERT INTO course VALUES (25, 'html', '2', '2024-12-6', 1, 3),
(23, 'javascript', '1', '2024-2-7', 1, 1),
(94, 'python', '3', '2024-21-7', 1, 2)
"""

#execute_query(connection,pop_taecher )
#execute_query(connection,pop_course )
#execute_query(connection, pop_client)

#creating relationships

alter_cousre = """
ALTER TABLE course
ADD FOREIGN KEY(teacher)
REFERENCES teacher(teacher_id)
ON DELETE SET NULL;
"""

alter_cousre_again = """
ALTER TABLE course
ADD FOREIGN KEY(client)
REFERENCES client(client_id)
ON DELETE SET NULL;
"""

# execute_query(connection, alter_cousre)
# execute_query(connection, alter_cousre_again)

#reading data from db
# creating read query of data from db
def read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as error:
        print(f"Error: {error}")
q1 = """
SELECT *
FROM teacher;
"""
q2 = """
SELECT course.course_id, course.course_name, client.client_name
FROM course
JOIN client
ON course.client = client.client_id
"""
results = read_query(connection, q2)
mylist = []
for result in results:
    result = list(result)
    mylist.append(result)
print(mylist)

# #formating output into panda dataframe
# columns = ["course_id", "course_name", "client_name"]
# data_f = pd.DataFrame(mylist, columns=columns)

# #print(data_f)

# #updating records
update = """
UPDATE teacher
SET phone_no = '0781883760'
WHERE teacher_id = 1;

"""

execute_query(connection, update)
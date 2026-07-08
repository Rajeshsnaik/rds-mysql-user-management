# 🚀 RDS MySQL User Management

A simple **User Management Application** built using **Next.js (App Router)**, **Tailwind CSS**, and **Amazon RDS for MySQL**.

This project demonstrates how to build a full-stack application where user information is stored in a **managed relational database (Amazon RDS MySQL)** instead of NoSQL databases.

The application allows users to:

- Create new users
- Store username, email, and phone number
- Fetch and display all users from Amazon RDS MySQL

---

# 📌 Features

- ✅ Next.js App Router
- ✅ React.js Frontend
- ✅ Tailwind CSS UI
- ✅ Amazon RDS MySQL Database
- ✅ MySQL Database Connection
- ✅ REST API using Next.js Route Handlers
- ✅ Create User API
- ✅ Get All Users API
- ✅ Environment Variable Configuration
- ✅ Clean Project Structure

---

# 🏗️ Application Architecture

```text
User
 │
 ▼
Next.js Frontend
 │
 ▼
Next.js API Route
(/api/users)
 │
 ▼
MySQL Connection
(mysql2)
 │
 ▼
Amazon RDS MySQL
 │
 ▼
Users Table
```

---

# 🛠️ Technologies Used

## Frontend

- Next.js
- React.js
- Tailwind CSS

## Backend

- Next.js Route Handlers
- Node.js
- mysql2 package

## Database

- Amazon RDS MySQL

---

# 📂 Project Structure

```text
mysql-user-management
│
├── app
│   │
│   ├── api
│   │   └── users
│   │       └── route.js
│   │
│   ├── components
│   │   └── UserForm.jsx
│   │
│   ├── users
│   │   └── page.jsx
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── database
│   └── schema.sql
│
├── lib
│   └── db.js
│
├── .env.local
├── package.json
└── README.md
```

---

# ⚙️ Prerequisites

Before running this project, make sure you have:

- Node.js v18+
- npm
- AWS Account
- Amazon RDS MySQL Instance
- MySQL Client / MySQL Workbench

---

# ☁️ AWS RDS MySQL Setup

## Step 1: Create RDS MySQL Database

Go to:

```text
AWS Console
        ↓
Amazon RDS
        ↓
Create Database
```

Choose:

```text
Engine:
MySQL
```

---

## Recommended Configuration

### Database Settings

```text
DB Instance Identifier:
user-management-db
```

Example:

```text
Username:
admin
```

Create a strong password.

---

### Connectivity

Enable:

```text
Public Access:
Yes
```

for learning/demo purposes.

---

## Step 2: Configure Security Group

After creating RDS:

Go to:

```text
RDS
 ↓
Security Group
 ↓
Inbound Rules
```

Add:

```text
Type:
MYSQL/Aurora

Protocol:
TCP

Port:
3306

Source:
Your IP Address
```

Example:

```text
MYSQL/Aurora
TCP
3306
xxx.xxx.xxx.xxx/32
```

---

# 🗄️ Database Setup

Connect to your RDS MySQL instance using:

- MySQL Workbench
- MySQL CLI
- Any MySQL client

---

## Create Database and Table

SQL file location:

```text
database/schema.sql
```

Execute:

```sql
CREATE DATABASE user_management;

USE user_management;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 📦 Install Project Dependencies

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mysql-user-management.git
```

Navigate:

```bash
cd mysql-user-management
```

Install packages:

```bash
npm install
```

---

# 📦 Install MySQL Package

Install MySQL driver:

```bash
npm install mysql2
```

---

# 🔐 Environment Variables

Create:

```text
.env.local
```

Add:

```env
DB_HOST=YOUR_RDS_ENDPOINT

DB_PORT=3306

DB_NAME=user_management

DB_USER=admin

DB_PASSWORD=YOUR_DATABASE_PASSWORD
```

Example:

```env
DB_HOST=user-db.xxxxxx.us-east-1.rds.amazonaws.com
DB_PORT=3306
DB_NAME=user_management
DB_USER=admin
DB_PASSWORD=password123
```

---

# ⚠️ Important

Never commit:

```text
.env.local
```

to GitHub.

Add it to:

```text
.gitignore
```

Example:

```text
.env.local
node_modules
.next
```

---

# 🔌 Database Connection

The database connection is handled inside:

```text
lib/db.js
```

Example:

```javascript
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default db;
```

---

# ▶️ Run the Application

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🧪 Application Flow

## Create User

Enter:

```text
Username
Email
Phone Number
```

Click:

```text
Save User
```

Data flow:

```text
Form
 ↓
POST /api/users
 ↓
MySQL INSERT Query
 ↓
Amazon RDS MySQL
```

---

## View Users

Click:

```text
View All Users
```

Data flow:

```text
GET /api/users
 ↓
SELECT Query
 ↓
Amazon RDS MySQL
 ↓
Display Users
```

---

# 📡 API Endpoints

## Create User

### Endpoint

```http
POST /api/users
```

Request:

```json
{
  "username": "Rajesh",
  "email": "rajesh@gmail.com",
  "phoneNumber": "9876543210"
}
```

SQL Query:

```sql
INSERT INTO users
(username,email,phone_number)
VALUES (?, ?, ?);
```

---

## Get All Users

### Endpoint

```http
GET /api/users
```

SQL Query:

```sql
SELECT *
FROM users
ORDER BY id DESC;
```

Response:

```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "username": "Rajesh",
      "email": "rajesh@gmail.com",
      "phone_number": "9876543210"
    }
  ]
}
```

---

# 🧪 Testing Database Connection

Connect to MySQL:

```bash
mysql \
-h YOUR_RDS_ENDPOINT \
-u admin \
-p
```

Select database:

```sql
USE user_management;
```

View users:

```sql
SELECT * FROM users;
```

---

# 🚀 Future Improvements

- Update User
- Delete User
- Search Users
- Pagination
- Authentication
- AWS Secrets Manager Integration
- Database Migration
- Production Deployment
- Docker Support

---

# 🔄 DynamoDB vs RDS MySQL

| Feature        | DynamoDB             | RDS MySQL      |
| -------------- | -------------------- | -------------- |
| Database Type  | NoSQL                | Relational     |
| Data Format    | Key-Value / Document | Tables & Rows  |
| Query Language | DynamoDB API         | SQL            |
| Schema         | Flexible             | Fixed          |
| Relationships  | Limited              | Supported      |
| Scaling        | Automatic            | Instance Based |

---

# 🤝 Contributing

Contributions are welcome.

Steps:

```bash
git clone repository

create new branch

make changes

commit changes

push branch
```

Create a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If this project helped you understand **Amazon RDS MySQL with Next.js**, consider giving the repository a ⭐.

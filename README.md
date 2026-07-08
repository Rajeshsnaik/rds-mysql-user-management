# 🚀 DynamoDB User Management

A simple **User Management** application built with **Next.js (App Router)**, **Tailwind CSS**, and **Amazon DynamoDB**.

This project demonstrates how to perform **Create** and **Read** operations using **Amazon DynamoDB** without using MongoDB or any SQL database.

---

## 📌 Features

- ✅ Next.js App Router
- ✅ Tailwind CSS UI
- ✅ Amazon DynamoDB Integration
- ✅ AWS SDK v3
- ✅ Create User
- ✅ View All Users
- ✅ REST API using Next.js Route Handlers
- ✅ Environment Variables
- ✅ Clean Project Structure

---

## 📂 Project Structure

```text
dynamodb-user-management
│
├── app
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
├── lib
│   └── dynamodb.js
│
├── .env.local
├── package.json
└── README.md
```

---

# 📷 Application Workflow

```text
User
   │
   ▼
Next.js Frontend
   │
   ▼
API Route (/api/users)
   │
   ▼
Amazon DynamoDB
   │
   ▼
Response
   │
   ▼
Frontend Updates
```

---

# 🛠 Technologies Used

- Next.js (App Router)
- React.js
- Tailwind CSS
- Amazon DynamoDB
- AWS SDK v3
- JavaScript

---

# ⚙️ Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or later)
- npm
- AWS Account
- AWS IAM User
- Amazon DynamoDB Table

---

# 📥 Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/dynamodb-user-management.git
```

Go to the project directory.

```bash
cd dynamodb-user-management
```

---

# 📦 Install Dependencies

```bash
npm install
```

---

# ☁️ Create DynamoDB Table

Login to the AWS Console.

Navigate to

```text
Amazon DynamoDB
```

Click

```text
Create Table
```

Use the following configuration.

| Property      | Value  |
| ------------- | ------ |
| Table Name    | users  |
| Partition Key | id     |
| Type          | String |

Keep all other settings as default and click **Create Table**.

---

# 🔐 Create IAM User

Go to

```text
AWS Console
→ IAM
→ Users
→ Create User
```

Give a username.

Example

```text
dynamodb-demo-user
```

Attach permissions.

For learning purposes, you may attach:

```text
AmazonDynamoDBFullAccess
```

Create the user.

---

# 🔑 Create Access Keys

Open the IAM User.

Go to

```text
Security Credentials
```

Click

```text
Create Access Key
```

Choose

```text
Command Line Interface (CLI)
```

Download or copy the

- Access Key ID
- Secret Access Key

Store them securely.

---

# 🌎 Create Environment Variables

Create a file named

```text
.env.local
```

Add the following.

```env
AWS_REGION=us-east-1

AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY

AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY

DYNAMODB_TABLE=users
```

Replace the values with your own AWS credentials.

> Never commit this file to GitHub.

---

# ▶️ Run the Project

```bash
npm run dev
```

Open

```text
http://localhost:3000
```

---

# 🧪 Test the Application

Enter

- Username
- Email
- Phone Number

Click

```text
Save User
```

The data will be stored inside the DynamoDB table.

Click

```text
View All Users
```

All records from DynamoDB will be displayed.

---

# 📡 API Endpoints

## Create User

```http
POST /api/users
```

Request Body

```json
{
  "username": "Virat",
  "email": "virat18@gmail.com",
  "phoneNumber": "9876543210"
}
```

Response

```json
{
  "success": true,
  "message": "User saved successfully."
}
```

---

## Get All Users

```http
GET /api/users
```

Response

```json
{
  "success": true,
  "users": [
    {
      "id": "...",
      "username": "Virat",
      "email": "virat18@gmail.com",
      "phoneNumber": "9876543210"
    }
  ]
}
```

---

# 📸 Screenshots

Add screenshots here.

```text
Home Page

User List Page
```

---

# 🚀 Future Improvements

- Update User
- Delete User
- Search Users
- Pagination
- Form Validation
- Toast Notifications
- Loading Spinner
- Server-side Validation

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

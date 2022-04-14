# Register new student.
localhost:3000/api/v1/Stud_enrollment
{
  "fname": "Yuki",
  "lname": "Lana",
  "gender": "Female",
  "dob": "1997-08-14",
  "class": "Basic 4",
  "parent_fname": "Tems",
  "parent_lname": "Lana",
  "parent_gender": "Female",
  "parent_email": "tems@parent.com",
  "parent_alt_email": "lana@parent.com",
  "parent_phone": "08011122233",
  "street": "Muson Centre",
  "city": "Onikan",
  "state": "Lagos",
  "country": "Nigeria"
}


# Check if a parent exists in db.
localhost:3000/api/v1/parent-check
{
  "email": "tems@parent.com"
}


# Get all students enrolled.
localhost:3000/api/v1/students
No parameters required


# Get single student enrolled.
localhost:3000/api/v1/students/:admissionId
localhost:3000/api/v1/students/:2996051632


# Get parent's children.
localhost:3000/api/v1/children
{
  "login_email": "kenzi@student.com"
}


# Get all parents.
localhost:3000/api/v1/parents
No parameters required


# Get single parent.
localhost:3000/api/v1/parents/:email
localhost:3000/api/v1/parents/:kenzi@student.com


# Add/edit fee.
localhost:3000/api/v1/add-fee
{
  "class": "Basic 1",
  "amount": 350000
}


# Create a new notification.
localhost:3000/api/v1/add-notification
{
  "title": "PTA Meeting",
  "description": "Please come to our PTA meeting"
}


# Login
localhost:3000/api/v1/login
{
  "email": "lana@parent.com",
  "password": ""
}
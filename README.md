# 💼 Job Portal – Spring Boot + MongoDB Atlas (M0 Cluster)

This is a job portal backend application built using **Spring Boot** and **MongoDB Atlas (M0 free cluster)**. It allows recruiters to post jobs and candidates to view and search jobs. The backend is connected to a cloud-hosted MongoDB Atlas database for scalable and secure storage.

---

## 🚀 Features

- Add new job postings
- View all job listings
- Search jobs by title or location
- Update / - Delete existing job posts (In progress)
- Cloud-based MongoDB Atlas integration (M0 cluster)

---

## 🛠️ Tech Stack

- Java 21+
- Spring Boot 3.x
- MongoDB Atlas (M0 Free Cluster)
- Maven
- Postman (for API testing)
- MongoDB Database

---

## ☁️ MongoDB Atlas (M0) Configuration

You are using a **MongoDB Atlas M0 (Free Tier)** cluster hosted on the cloud.

Update your `application.properties` file with the connection string:

```properties
spring.data.mongodb.uri={MONGO_URI}      Eg., mongodb+srv://<username>:<password>@cluster0.mongodb.net/jobportal?retryWrites=true&w=majority
spring.data.mongo.database={MONGO_DB}

🧰 How to Run
1. **Clone the repository**
git clone https://github.com/HarshvardhanPatil13/job-portal-springboot.git
cd job-portal-springboot

2. **Configure MongoDB Atlas connection**
Edit src/main/resources/application.properties and update the URI.

3. **Run the application**
Using Maven:
mvn spring-boot:run
Or using your IDE's Run (▶️) button.

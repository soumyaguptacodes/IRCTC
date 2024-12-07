# IRCTC
irctc
+------------------+
| Tables_in_railway_management |
+------------------+
| users            |
| trains           |
| bookings         |
+------------------+




The IRCTC System is a web-based application designed to manage train bookings, seat availability, and user roles effectively. It incorporates two primary roles: **Admin**, who can manage trains and seats, and **User**, who can search trains, check availability, and book seats. The project handles real-time seat bookings with concurrency management to ensure smooth functionality.

Although I have experience with SQL and have already created the database schema for this project, completing the entire system with SQL will take more time due to its structured and query-intensive nature. To speed up development and simplify database management, I’m considering using Firebase Firestore, a NoSQL database. Firestore’s real-time synchronization and schema-less structure make it faster and more convenient for this type of project. While SQL is robust, Firestore allows for quicker setup, especially during local development, while maintaining flexibility and ease of integration with REST APIs.

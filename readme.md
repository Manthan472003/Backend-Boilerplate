# My Backend Project

This guide will help you set up and run the project on your local machine.

## Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Manthan472003/Backend-Boilerplate.git
   cd your-repo
   ```

2. **Configure the Database**
   Open `Backend/Database/Config/dbconfig.json` and update it with your database credentials:
   ```json
   {
     "development": {
       "username": "your_username",
       "password": "your_password",
       "database": "your_database",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

3. **Install Dependencies**
   Navigate to the `Backend` directory and install the required dependencies:
   ```bash
   cd Backend
   npm install
   ```

4. **Start the Server**
   Run the following command to start the application:
   ```bash
   npm start
   ```

## Notes
- Ensure MySQL is running and the `teams` database is created.
- Use `.env` for managing sensitive environment variables if necessary.

That’s it! The project should now be running on your system.

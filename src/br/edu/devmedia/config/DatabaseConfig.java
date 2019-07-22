package br.edu.devmedia.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DatabaseConfig {

	public static Connection getConnection() {
        try {
               Class.forName("com.mysql.jdbc.Driver");
               return DriverManager.getConnection
               ("jdbc:mysql://localhost:3306/news_devmedia", 
               "root", "root");
        } catch (SQLException | ClassNotFoundException e) {
               e.printStackTrace();
        }
        return null;
  }
}

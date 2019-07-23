package br.edu.devmedia.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DatabaseConfig {
	
	private static DatabaseConfig instance;

    private Connection connection;
    private static String DRIVE = "com.mysql.jdbc.Driver";
    private static String URL = "jdbc:mysql://localhost:3306/news_devmedia";
    private static String USER_NAME = "root";
    private static String PASSWORD = "root";

	private DatabaseConfig(){
		
		try {
            Class.forName(DRIVE);
            this.connection = DriverManager.getConnection
            (URL, USER_NAME, PASSWORD);
		} catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
     }
		
	}
	
	public Connection getConnection() {
        return connection;
    }
	
	public static DatabaseConfig getInstance() throws SQLException {
        if (instance == null) {
            instance = new DatabaseConfig();
        } else if (instance.getConnection().isClosed()) {
            instance = new DatabaseConfig();
        }

        return instance;
    }
}

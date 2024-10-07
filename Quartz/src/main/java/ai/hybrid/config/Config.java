package ai.hybrid.config;

import lombok.Data;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@Data
public class Config {
    private Properties properties = new Properties();

    public Config() {
        try (InputStream input = getClass().getResourceAsStream("/config.properties")) {
            if (input == null) {
                System.out.println("Sorry, unable to find config.properties");
                return;
            }
            properties.load(input);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
}

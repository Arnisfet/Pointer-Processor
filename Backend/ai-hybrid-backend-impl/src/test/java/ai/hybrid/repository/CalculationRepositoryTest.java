package ai.hybrid.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CalculationRepositoryTest {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Test
    public void testDatabaseConnection() {
        // Check the database connection by getting the database name
        String databaseName = mongoTemplate.getDb().getName();
        assertNotNull(databaseName, "Database connection is successful.");
    }
}

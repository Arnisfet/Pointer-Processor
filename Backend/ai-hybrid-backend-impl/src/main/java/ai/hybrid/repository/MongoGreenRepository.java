package ai.hybrid.repository;
import ai.hybrid.data.CalculationData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoGreenRepository extends MongoRepository<CalculationData, String> {

}

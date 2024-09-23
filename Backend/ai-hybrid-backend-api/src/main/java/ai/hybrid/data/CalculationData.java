package ai.hybrid.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Document(collection = "calculation")
public class CalculationData {
    @Id
    private String id;  // MongoDB _id
    private String appName;
    private String status;
    private Object result;
    private LocalDateTime startDate;
    private LocalDateTime finishDate;
    private Long startHour;
    private Long finishHour;
    private String identifier;
}

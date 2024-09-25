package ai.hybrid.data.repository;


import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@AllArgsConstructor
@Document(collection = "calculation")
public class StatisticData {
    @Id
    private String id;
    private String job;
    private Date startDate;
    private Date finishDate;
    private String status;
    private CalculationParams calculationParams;
}

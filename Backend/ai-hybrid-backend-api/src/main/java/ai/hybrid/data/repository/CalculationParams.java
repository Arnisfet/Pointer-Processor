package ai.hybrid.data.repository;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@Builder
public class CalculationParams {
    private String status;
    private Long radius;
    private Object result;
    private Date startDate;
    private Date finishDate;
    private Long startHour;
    private Long finishHour;
    private String fileName;   // Field to store the name of the uploaded file
    private byte[] fileData;   // New field to store file data
}

package ai.hybrid.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AudienceCalculationDocument {
    private String _id;
    private String job;
    private Date startDate;
    private String status;
}

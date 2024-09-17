package ai.hybrid.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;

@Data
@AllArgsConstructor
public class AudienceData {
    Long radius;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date startDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date finishDate;
    Long firstHour;
    Long lastHour;
    MultipartFile file;
}

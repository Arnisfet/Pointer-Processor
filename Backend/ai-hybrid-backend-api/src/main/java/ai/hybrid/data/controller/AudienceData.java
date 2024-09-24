package ai.hybrid.data.controller;

import ai.hybrid.data.repository.CalculationParams;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import java.util.Date;

@Data
@AllArgsConstructor
public class AudienceData {
    @NotNull
    @Max(Integer.MAX_VALUE)
    @Min(0)
    Long radius;

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date startDate;

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date finishDate;

    @Min(0)
    @Max(23)
    Long firstHour;
    @Min(0)
    @Max(23)
    Long lastHour;

    @NotNull
    MultipartFile file;

    public CalculationParams toCalculationData() {
        return CalculationParams.builder()
                .status("initialised")
                .radius(this.radius)
                .result(null)
                .startDate(this.startDate)
                .finishDate(this.finishDate)
                .startHour(this.firstHour)
                .finishHour(this.lastHour)
                .identifier(null)
                .build();
    }
}

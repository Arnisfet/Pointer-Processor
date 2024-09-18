package ai.hybrid.controller.ping.impl;

import ai.hybrid.controller.AudienceController;
import ai.hybrid.data.AudienceData;
import ai.hybrid.service.PingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AudienceControllerImpl implements AudienceController {

    private final PingService pingService;

    @Override
    public ResponseEntity<String> AudienceCalcPut(AudienceData data) {
        log.info(data.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

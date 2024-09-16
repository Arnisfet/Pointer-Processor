package ai.hybrid.controller.ping.impl;

import ai.hybrid.controller.PingController;
import ai.hybrid.exception.NotFoundException;
import ai.hybrid.service.PingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AudienceControllerImpl implements PingController {

    private final PingService pingService;

    @Override
    public ResponseEntity<String> AudienceCalcPut(
            @RequestParam("file") MultipartFile file,
            @RequestParam Map<String, String> audienceData) {

        log.info("File received: " + file.getOriginalFilename() + ", Size: " + file.getSize());
        log.info("JSON: " + audienceData);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

package ai.hybrid.controller.ping.impl;

import ai.hybrid.controller.AudienceController;
import ai.hybrid.data.controller.AudienceData;
import ai.hybrid.service.LauncherInterface;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AudienceControllerImpl implements AudienceController {

    private final LauncherInterface launcherService;

    @Override
    public ResponseEntity<String> AudienceCalcPut(AudienceData data) throws IOException {
        log.info(data.toString());
        launcherService.launchAudienceCalculation(data);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

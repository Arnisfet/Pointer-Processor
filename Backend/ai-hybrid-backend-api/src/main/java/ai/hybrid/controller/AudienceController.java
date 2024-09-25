package ai.hybrid.controller;

import ai.hybrid.data.controller.AudienceData;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@CrossOrigin
@RequestMapping(value = "/audience")
public interface AudienceController {

//    @GetMapping(value = "/pong")
//    ResponseEntity<String> pingPong();

    @PutMapping(value = "/calculation", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    ResponseEntity<String> AudienceCalcPut(
            @Valid @ModelAttribute AudienceData data) throws IOException;
}

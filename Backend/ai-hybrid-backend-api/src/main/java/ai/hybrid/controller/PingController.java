package ai.hybrid.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@CrossOrigin
@RequestMapping(value = "/audience")
public interface PingController {

//    @GetMapping(value = "/pong")
//    ResponseEntity<String> pingPong();

    @PutMapping(value = "/calculation", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> AudienceCalcPut(
            @RequestParam("file") MultipartFile file,
            @RequestParam Map<String, String> audienceData);
}

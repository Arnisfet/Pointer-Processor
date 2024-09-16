package ai.hybrid.service.impl;

import ai.hybrid.exception.NotFoundException;
import ai.hybrid.service.PingService;
import org.springframework.stereotype.Service;

@Service
public class PingServiceImpl implements PingService {
    @Override
    public String getPing() throws NotFoundException {
        throw new NotFoundException("Some error");
    }
}

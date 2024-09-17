package ai.hybrid.service;

import ai.hybrid.exception.NotFoundException;

public interface PingService {

    String getPing() throws NotFoundException;
}

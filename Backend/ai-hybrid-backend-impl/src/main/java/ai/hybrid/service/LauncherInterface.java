package ai.hybrid.service;

import ai.hybrid.data.controller.AudienceData;
import ai.hybrid.exception.NotFoundException;

import java.io.IOException;

public interface LauncherInterface {

    String getPing() throws NotFoundException;
    void launchAudienceCalculation(AudienceData data) throws IOException;
}

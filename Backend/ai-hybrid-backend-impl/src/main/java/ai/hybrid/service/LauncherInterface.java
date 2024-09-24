package ai.hybrid.service;

import ai.hybrid.data.controller.AudienceData;
import ai.hybrid.exception.NotFoundException;

public interface LauncherInterface {

    String getPing() throws NotFoundException;
    void launchAudienceCalculation(AudienceData data);
}

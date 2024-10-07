package ai.hybrid.service.impl;

import ai.hybrid.data.controller.AudienceData;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import ai.hybrid.data.repository.StatisticData;
import ai.hybrid.exception.NotFoundException;
import ai.hybrid.repository.MongoGreenRepository;
import ai.hybrid.service.LauncherInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Service
@Slf4j
public class LauncherService implements LauncherInterface {
    private MongoGreenRepository mongoRepository;
    @Autowired
    public LauncherService(MongoGreenRepository mongoRepository) {
        this.mongoRepository = mongoRepository;
    }
    @Override
    public String getPing() throws NotFoundException {
        throw new NotFoundException("Some error");
    }
    @Override
    public void countAudienceBackend(AudienceData data) throws IOException {
        String objectId = new ObjectId().toString();
        StatisticData mongoStats = new StatisticData(
                objectId,
                "AudienceCalculation",
                new Date(),
                null,
                "initialized",
                data.toCalculationData());
        log.info("Saving object: " + mongoStats);
        mongoRepository.save(mongoStats);
    }
}

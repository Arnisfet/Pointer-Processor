package ai.hybrid.service.impl;

import ai.hybrid.data.controller.AudienceData;
import org.bson.types.ObjectId;
import ai.hybrid.data.repository.StatisticData;
import ai.hybrid.exception.NotFoundException;
import ai.hybrid.repository.MongoGreenRepository;
import ai.hybrid.service.LauncherInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;

@Service
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
    public void launchAudienceCalculation(AudienceData data) throws IOException {
        String objectId = new ObjectId().toString();
        StatisticData mongoStats = new StatisticData(objectId,
                "AudienceCalculation",
                new Date(),
                null,
                "initialized",
                data.toCalculationData());
        mongoRepository.save(mongoStats);

    }
}

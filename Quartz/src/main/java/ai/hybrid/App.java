package ai.hybrid;

import ai.hybrid.config.Config;
import ai.hybrid.data.AudienceCalculationDocument;
import ai.hybrid.job.MyJob;
import ai.hybrid.repository.impl.MongoRepository;
import org.quartz.*;
import org.quartz.impl.StdScheduler;
import org.quartz.impl.StdSchedulerFactory;

public class App {
  private static MongoRepository<AudienceCalculationDocument> mongoRepository =
          new MongoRepository("pointer_processor",
          "mongo.green.hosts", "calculation");
  public static void main(String[] args) {
    mongoRepository.findAll(AudienceCalculationDocument.class);
    JobDetail job = JobBuilder.newJob(MyJob.class)
            .withIdentity("myJob", "group1")
            .build();

    Trigger trigger = TriggerBuilder.newTrigger()
            .withIdentity("myTrigger", "group1")
            .startNow()
            .withSchedule(SimpleScheduleBuilder.simpleSchedule()
                    .withIntervalInSeconds(10)
                    .repeatForever())
            .build();
    try {
      Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
      scheduler.start();

      scheduler.scheduleJob(job, trigger);
    }
    catch (SchedulerException e) {
      e.printStackTrace();
    }
  }
}

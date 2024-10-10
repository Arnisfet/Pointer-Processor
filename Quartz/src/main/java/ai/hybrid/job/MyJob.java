package ai.hybrid.job;

import ai.hybrid.data.AudienceCalculationDocument;
import ai.hybrid.processes.JobBuilder;
import ai.hybrid.processes.ProcessFactory;
import ai.hybrid.repository.impl.MongoRepository;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;

import java.util.Comparator;
import java.util.Date;
import java.util.List;

@DisallowConcurrentExecution
public class MyJob implements Job{
    private static final MongoRepository<AudienceCalculationDocument> mongoRepository =
            new MongoRepository<>("pointer_processor",
                    "mongo.green.hosts", "calculation");
@Override
    public void execute(JobExecutionContext context){
        List<AudienceCalculationDocument> listClasses = mongoRepository.findInitialized(AudienceCalculationDocument.class);

        if (!listClasses.isEmpty()) {
            listClasses.sort(Comparator.comparing(AudienceCalculationDocument::getStartDate));
            listClasses.forEach(audience -> {
                System.out.println("document with ID: " + audience.get_id() + " is calculating");
                audience.setStatus("calculating");
                mongoRepository.save(audience);
                JobBuilder process = new ProcessFactory().getCommand(audience);
                if (process != null) {
                    process.setBuilder(audience);
                    Integer exitCode = process.run();
                    if (exitCode != 0) {
                        audience.setStatus("failed");
                        mongoRepository.save(audience);
                        System.out.println("Error to get job from document");
                        return;
                    }
                }
                else
                    System.out.println("Process creation error! Check the command.");
                System.out.println("Job with id: " + audience.get_id() + " was executed successfully!");
                audience.setStatus("finished");
                audience.setFinishDate(new Date());
                mongoRepository.save(audience);
            });
        }
    }
}

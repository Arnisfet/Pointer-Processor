package ai.hybrid.job;

import ai.hybrid.data.AudienceCalculationDocument;
import ai.hybrid.processes.JobBuilder;
import ai.hybrid.processes.ProcessFactory;
import ai.hybrid.repository.impl.MongoRepository;
import lombok.extern.slf4j.Slf4j;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;

import java.util.Comparator;
import java.util.Date;
import java.util.List;

@DisallowConcurrentExecution
@Slf4j
public class MyJob implements Job{
    private static final MongoRepository<AudienceCalculationDocument> mongoRepository =
            new MongoRepository<>("pointer_processor",
                    "mongo.green.hosts", "calculation");

    /**
     * Execution part of the job,
     * Creates the connection, finds all the row with "initializsed" status,
     * Building and launching the process depends on the job.
     * @param context
     */
    @Override
    public void execute(JobExecutionContext context){
        List<AudienceCalculationDocument> listClasses = mongoRepository.findInitialized(AudienceCalculationDocument.class);

        if (!listClasses.isEmpty()) {
            listClasses.sort(Comparator.comparing(AudienceCalculationDocument::getStartDate));
            listClasses.forEach(document -> {
                log.debug("-------------------------- NEW ITERATION --------------------------");
                log.debug("document with ID: " + document.get_id() + " is calculating");
                document.setStatus("calculating");
                mongoRepository.save(document);
                JobBuilder process = new ProcessFactory().getCommand(document);
                if (process != null) {
                    process.setBuilder(document);
                    Integer exitCode = process.run();
                    if (exitCode != 0) {
                        document.setStatus("failed");
                        mongoRepository.save(document);
                        log.debug("Error to get job from document");
                        return;
                    }
                }
                else
                    log.debug("Process creation error! Check the command.");
                log.debug("Job with id: " + document.get_id() + " was executed successfully!");
                document.setStatus("finished");
                document.setFinishDate(new Date());
                mongoRepository.save(document);
                log.debug("Document is saved.");
            });
        }
    }
}

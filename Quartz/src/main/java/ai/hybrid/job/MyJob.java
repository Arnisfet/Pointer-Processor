package ai.hybrid.job;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class MyJob implements Job{
@Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        System.out.println("Executing job");
    }
}

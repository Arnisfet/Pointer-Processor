package ai.hybrid.processes;

import ai.hybrid.data.AudienceCalculationDocument;

/**
 * Factory for process creation
 */
public class ProcessFactory {
    public JobBuilder getCommand(AudienceCalculationDocument document){
        if (document.getJob().equals("AudienceCalculation"))
            return new AudienceJob();
        else
            return null;
    }
}

package ai.hybrid.processes;

import ai.hybrid.data.AudienceCalculationDocument;

public class ProcessFactory {
    public JobBuilder getCommand(AudienceCalculationDocument document){
        if (document.getJob().equals("AudienceCalculation"))
            return new AudienceJob();
        else
            return null;
    }
}

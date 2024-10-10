package ai.hybrid.processes;

import ai.hybrid.data.AudienceCalculationDocument;

import java.io.IOException;

public abstract class JobBuilder {
    protected ProcessBuilder builder;
    public abstract void setBuilder(AudienceCalculationDocument document);
    public Integer run() {
        try {
            Process process = builder.start();
            int exitCode = process.waitFor();
            return exitCode;
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return 2;
    }
}

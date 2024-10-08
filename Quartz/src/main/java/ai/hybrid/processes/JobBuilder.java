package ai.hybrid.processes;

import ai.hybrid.data.AudienceCalculationDocument;

import java.io.IOException;

public abstract class JobBuilder {
    protected ProcessBuilder builder;
    public abstract void setBuilder(AudienceCalculationDocument document);
    public void run() {
        try {
            Process process = builder.start();
            int exitCode = process.waitFor();
            System.out.println("Process exited with code: " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}

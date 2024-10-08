package ai.hybrid.processes;

import ai.hybrid.data.AudienceCalculationDocument;

public class AudienceJob extends JobBuilder {
    @Override
    public void setBuilder(AudienceCalculationDocument document) {
        builder = new java.lang.ProcessBuilder("sh", "../scripts/countAudienceBackend.sh", document.get_id());
    }
}

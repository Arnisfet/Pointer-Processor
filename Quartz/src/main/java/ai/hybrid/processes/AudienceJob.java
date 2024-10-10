package ai.hybrid.processes;

import ai.hybrid.data.AudienceCalculationDocument;

/**
 * Audience job creator.
 * Making an appropriate builder with audience script
 */
public class AudienceJob extends JobBuilder {
    @Override
    public void setBuilder(AudienceCalculationDocument document) {
        builder = new java.lang.ProcessBuilder("sh", "../scripts/countAudienceBackend.sh", document.get_id());
    }
}

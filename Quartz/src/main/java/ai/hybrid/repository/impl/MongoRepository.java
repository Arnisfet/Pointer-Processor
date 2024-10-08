package ai.hybrid.repository.impl;

import ai.hybrid.config.Config;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.UpdateOptions;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class MongoRepository<T> implements ai.hybrid.repository.MongoRepository<T> {
    private Config config = new Config();
    private final MongoDatabase database;
    private final String collectionName;

    public MongoRepository(String database, String connection, String collection) {
        MongoClientURI uri = new MongoClientURI(config.getProperties().getProperty(connection));
        MongoClient mongoClient = new MongoClient(uri);

        this.database = mongoClient.getDatabase(database);
        this.collectionName = collection;
    }
    @Override
    public T save(T entity) {
        MongoCollection<Document> collection = database.getCollection(collectionName);
        Document doc = convertToDocument(entity);
        Object id = doc.get("_id");
        Bson filter = Filters.eq("_id", id);
        UpdateOptions options = new UpdateOptions().upsert(true);
        collection.updateOne(filter, new Document("$set", doc), options);
        return entity;
    }

    /**
     * Finds all the documents with initialized value in the status field
     * @param clazz
     * @return
     */
    @Override
    public List<T> findInitialized(Class<T> clazz) {
        MongoCollection<Document> collection = database.getCollection(collectionName);
        List<T> results = new ArrayList<>();

        Bson filter = Filters.eq("status", "initialized");
        MongoCursor<Document> cursor = collection.find().filter(filter).iterator();
        try {
            while (cursor.hasNext()) {
                Document doc = cursor.next();
                results.add(convertToEntity(doc, clazz));
            }
        } finally {
            cursor.close();
        }
        return results;
    }

    private T convertToEntity(Document document, Class<T> clazz) {
        try {
            T entity = clazz.getDeclaredConstructor().newInstance();

            for (Field field : clazz.getDeclaredFields()) {
                field.setAccessible(true);
                Object value = document.get(field.getName());

                // Special handling for ObjectId to String conversion if needed
                if (value instanceof ObjectId) {
                    value = value.toString();
                }

                // Set the value to the entity's field
                field.set(entity, value);
            }

            return entity;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to convert document to entity", e);
        }
    }

    private Document convertToDocument(T entity) {
        Document document = new Document();

        try {
            Class<?> clazz = entity.getClass();

            for (Field field : clazz.getDeclaredFields()) {
                String fieldName = field.getName();
                Object value = field.get(entity);

                if (fieldName.equals("_id") && value instanceof String)
                    value = new ObjectId((String) value);
                document.put(fieldName, value);
            }
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return document;
    }

}

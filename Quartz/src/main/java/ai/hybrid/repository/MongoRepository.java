package ai.hybrid.repository;

import java.util.List;

public interface MongoRepository<T> {
    T save(T entity);
    List<T> findInitialized(Class<T> clazz);
}

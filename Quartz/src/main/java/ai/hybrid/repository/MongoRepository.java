package ai.hybrid.repository;

import java.util.List;

public interface MongoRepository<T> {
    T save(T entity);
    List<T> findAll(Class<T> clazz);
}

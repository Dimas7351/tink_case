package org.example;

import entities.Employee;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import jakarta.transaction.*;

import java.lang.module.Configuration;
import java.util.List;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) throws HeuristicRollbackException, SystemException, HeuristicMixedException, RollbackException {
        Configuration configuration = new Configuration().configure()
                .addAnnotatedClass(User.class);
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.openSession();

        session.beginTransaction();
        session.getTransaction().commit();
        session.close();
}
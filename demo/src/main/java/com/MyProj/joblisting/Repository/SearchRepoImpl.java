package com.MyProj.joblisting.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import com.MyProj.joblisting.Model.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

// import com.mongodb.MongoClient;
// import com.mongodb.MongoClientURI;
// import com.mongodb.client.MongoCollection;
// import com.mongodb.client.MongoDatabase;
// import org.bson.conversions.Bson;
// import java.util.concurrent.TimeUnit;
// import org.bson.Document;
// import com.mongodb.client.AggregateIterable;

@Component
public class SearchRepoImpl implements SeacrhRepo {

    @Autowired
    MongoClient mongoClient; // = new MongoClient(new MongoClientURI(""));

    @Autowired
    MongoConverter converter;

    @Override
    public List<Post> findbyText(String text) {
        List<Post> posts = new ArrayList<>();

        MongoDatabase database = mongoClient.getDatabase("NewMongo1");
        MongoCollection<Document> collection = database.getCollection("JobPost");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                new Document("index", "default")
                        .append("text",
                                new Document("query", text)
                                        .append("path", Arrays.asList("techs", "profile", "techs")))),
                new Document("$sort",
                        new Document("exp", 1L)),
                new Document("$limit", 5L)));

        result.forEach(doc -> posts.add(converter.read(Post.class,doc)));

        return posts;
    }

}

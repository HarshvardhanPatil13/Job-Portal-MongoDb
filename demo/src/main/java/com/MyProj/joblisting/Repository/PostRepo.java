package com.MyProj.joblisting.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.MyProj.joblisting.Model.Post;

public interface PostRepo extends MongoRepository<Post,String>{

    
} 

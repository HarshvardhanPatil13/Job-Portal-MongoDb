package com.MyProj.joblisting.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.MyProj.joblisting.Model.Post;
import com.MyProj.joblisting.Repository.PostRepo;
import com.MyProj.joblisting.Repository.SeacrhRepo;

@RestController
@CrossOrigin(origins = {"http://localhost:3000/", "https://job-portal-using-mongodb.onrender.com/","https://job-portal-mongo-db.vercel.app/"})
public class PostController {

    @Autowired
    PostRepo repo;

    @Autowired
    SeacrhRepo srepo;


    @GetMapping("/allPosts")
    @CrossOrigin
    public List<Post> getallPosts()
    {
        return repo.findAll();
    }

    @GetMapping("/posts/{text}")
    public List<Post> search(@PathVariable String text)
    {
        return srepo.findbyText(text);
    }
    
    @PostMapping("/post")
    public Post addPost(@RequestBody Post post)
    {
        return repo.save(post);
    }
}

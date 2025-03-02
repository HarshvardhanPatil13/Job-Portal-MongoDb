package com.MyProj.joblisting.Repository;
import java.util.List;

import com.MyProj.joblisting.Model.Post;

public interface SeacrhRepo {
    public List<Post> findbyText(String text);
}



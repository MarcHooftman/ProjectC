using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace API.Models;


public static class DbSetExtensions 
{
    public static async Task<ActionResult<IEnumerable<ForumPost>>> IncludeComments(this IEnumerable<ForumPost> forumPosts, AntesContext context)
    {
        foreach (var forumPost in forumPosts) await LoadComments(forumPost, context);
        return new OkObjectResult(forumPosts);
    }

    public static async Task<ActionResult<ForumPost>> IncludeComments(this ForumPost forumPost, AntesContext context)
    {
        await LoadComments(forumPost, context);
        return new OkObjectResult(forumPost);
    }

    private static async Task LoadComments(ForumPost forumPost, AntesContext context)
    {
        forumPost.Comments = await context.ForumPost
            .Where(fp => fp.ForumPostID == forumPost.ID)
            .ToListAsync();

        foreach (var comment in forumPost.Comments) await LoadComments(comment, context);
    }
}
using Microsoft.AspNetCore.Mvc;
using Swagger.Models;

namespace Swagger.Controllers;

[ApiController]
[Route("[controller]")]
public class CountController
{
    private static int _count = 0;

    [HttpGet]
    public CountResponse Get()
    {
        return new CountResponse
        {
            Count = _count
        };
    }

    [HttpPost]
    public CountResponse Post(CountPostRequest req)
    {
        Interlocked.Add(ref _count, req.Add);

        return new CountResponse
        {
            Count = _count
        };
    }
}
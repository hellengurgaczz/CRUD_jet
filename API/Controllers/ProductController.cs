using Microsoft.AspNetCore.Mvc;
using API.Models;
using System;

namespace API.Controllers
{
    [ApiController]
    [Route("api/produto")]

    public class ProductController : ControllerBase
    {
        // POST: api/produto
        [HttpPost]
        public Product Create(Product product)
        {
            Product new_product = new Product();
            return product;
        }

    }
}
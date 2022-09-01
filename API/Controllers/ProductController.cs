using Microsoft.AspNetCore.Mvc;
using API.Models;
using System;
using API.Data;

namespace API.Controllers
{
    [ApiController]
    [Route("api/product")]

    public class ProductController : ControllerBase
    {
        private readonly DataContext _context;
        public ProductController(DataContext context) => _context = context;
        
        // POST: api/product
        [HttpPost]
        public IActionResult Create([FromBody] Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Created("Produto cadastrado!", product);
        }

        // GET: api/product
        [HttpGet]
        public List<Product> List() => _context.Products.ToList();

        private Product findProductById([FromRoute]Guid id) {

            Product product = _context.Products.Find(id);
            return product;
        }

        // GET: api/product/{id}
        [HttpGet]
        [Route("{id}")]
        public Product getById([FromRoute]Guid id) => findProductById(id);

        // UPDATE: api/product/{id}
        [HttpPut]
        public IActionResult Update([FromRoute]Guid _id, [FromBody] Product newProduct) {
           
            Product product = findProductById(newProduct.id);

            if(product == null) {
                return NotFound();
            }

            product.product_name = newProduct.product_name;
            product.product_image = newProduct.product_image;
            product.product_desc = newProduct.product_desc;
            product.status = newProduct.status;
            product.inventory = newProduct.inventory;
            product.price = newProduct.price;

            _context.SaveChanges();
            return Ok();
        }

        // DELETE: api/product/{id}
        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute]Guid id) {
 
            Product product = findProductById(id);

            if(product == null) {
                return NotFound();
            }

            _context.Products.Remove(product);
            _context.SaveChanges();
            return Ok();
        }
    }
}
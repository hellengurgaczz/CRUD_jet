
using System;

namespace API.Models
{
    public class Product
    {
        public Product() => id = Guid.NewGuid();

        public Guid id { get; set; }
        public string product_name { get; set; }
        public string product_image { get; set; }
        public string product_desc { get; set; }
        public int inventory { get; set; }
        public bool status { get; set; }
        public double price { get; set; }

    }
}
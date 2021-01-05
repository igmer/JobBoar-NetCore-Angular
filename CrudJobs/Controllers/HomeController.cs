using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudJobs.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
       
        public HomeController()
        {
        }

        [HttpGet]
        public List<JobBoard> GetData()
        {
            var JSON = System.IO.File.ReadAllText("data.json");
            var model = JsonConvert.DeserializeObject<List<JobBoard>>(JSON);
            return model;
        }





    }
}

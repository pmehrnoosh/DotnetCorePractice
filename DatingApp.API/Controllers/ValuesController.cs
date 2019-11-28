using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController: ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context= context;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values=await _context.Values.ToListAsync();
            return Ok(values);
        }
        // public ActionResult<IEnumerable<string>> Get(){
        //     //throw new Exception("Test exception");
        //     return new string[]{"value1","value2"};
        // }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var values= await _context.Values.FirstOrDefaultAsync(x=>x.Id==id);
            return Ok(values);
        }
        // public ActionResult<string> Get(int id){
        //     return "value";
        // }
    }
}
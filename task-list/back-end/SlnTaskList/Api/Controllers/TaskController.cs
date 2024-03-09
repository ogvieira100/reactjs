using Api.Bussiness;
using Api.Commons;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{

    [Route("api/[controller]")]
    public class TaskController : BaseController
    {

        readonly ITaskService _taskService;
        public TaskController(ITaskService taskService, LNotifications notifications)
            : base(notifications)
        {
            _taskService = taskService;
        }
        [HttpPut]
        public async Task<IActionResult> Put([FromBody]TaskModel taskRequest)
                            => await ExecApplication(() => _taskService.Update(taskRequest));


        [HttpDelete]
        public async Task<IActionResult> Delete([FromQuery] string id)
                           => await ExecApplication(() => _taskService.Remove(new Guid(id)));

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]TaskModel taskRequest) 
                            => await ExecApplication(()=> _taskService.Insert(taskRequest));

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] TaskRequest taskRequest) 
            => Response( await _taskService.GetAllTaskModel(taskRequest));
    }
}

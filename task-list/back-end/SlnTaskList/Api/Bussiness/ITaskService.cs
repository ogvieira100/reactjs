using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Bussiness
{
    public interface ITaskService:IBaseService<TaskModel>
    {

        Task<IEnumerable<TaskModel>> GetAllTaskModel(TaskRequest taskRequest);

        Task<bool> Remove(Guid guid);

    }
}

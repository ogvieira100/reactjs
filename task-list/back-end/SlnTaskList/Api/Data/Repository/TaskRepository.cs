using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Repository
{
    public class TaskRepository : BaseRepository<TaskModel>, ITaskRepository
    {

        public TaskRepository(Contexto _contexto) : base(_contexto)
        {




        }

    }
}

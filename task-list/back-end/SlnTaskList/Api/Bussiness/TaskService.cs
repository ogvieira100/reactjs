using Api.Commons;
using Api.Data.Repository;
using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace Api.Bussiness
{
    public class TaskService : BaseService<TaskModel>, ITaskService
    {
        readonly ITaskRepository _taskRepository;
        public TaskService(LNotifications notifications, ITaskRepository repository)
            : base(notifications, repository)
        {
            _taskRepository = repository;
        }

        public async Task<IEnumerable<TaskModel>> GetAllTaskModel(TaskRequest taskRequest)
        {
            var all = GetAll();

            if (taskRequest.FinaliyTask)
                all = all.Where(x => x.FinalDate.HasValue);

            if (taskRequest.StartDate.HasValue)
                all = all.Where(x => x.StartDate >= taskRequest.StartDate);

            if (taskRequest.FinalDate.HasValue)
                all = all.Where(x => x.FinalDate <= taskRequest.FinalDate);

            return await all.ToListAsync();


        }

        public async Task<bool> Remove(Guid guid)
        {
            var objRemove = await _taskRepository.GetById(guid);
            if (objRemove != null)
            {
                _taskRepository.Remove(objRemove);
                await _taskRepository.SaveChanges();
                return true;
            }
            return false;

        }
    }
}

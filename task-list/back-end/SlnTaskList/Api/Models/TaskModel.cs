using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class TaskModel
    {
        public Guid Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime? FinalDate { get; set; }

        public string Description { get; set; }

        public string Observation { get; set; }

        public TaskModel()
        {
            Id = Guid.NewGuid();
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class TaskRequest
    {

        public bool FinaliyTask { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? FinalDate { get; set; }

    }
}

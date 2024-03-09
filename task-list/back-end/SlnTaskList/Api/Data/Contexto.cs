using Api.Data.Mapping;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data
{
    public class Contexto:DbContext
    {
        public DbSet<TaskModel> TaskModel { get; set; }
        public Contexto(DbContextOptions<Contexto> options)
               : base(options)
        {



        }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.ApplyConfiguration(new TaskMapping());
           


            base.OnModelCreating(builder);
        }

    }
}

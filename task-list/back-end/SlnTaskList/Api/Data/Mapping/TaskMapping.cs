using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Mapping
{
    public class TaskMapping : IEntityTypeConfiguration<TaskModel> 
    {
        public void Configure(EntityTypeBuilder<TaskModel> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Description)
                    .HasColumnName("Description")
                    .IsRequired(true)
                    .HasColumnType("varchar(150)") 
                    ;

            builder.Property(c => c.Observation)
                   .HasColumnName("Observation")
                   .HasColumnType("Text")
                   ;


            builder.Property(c => c.StartDate)
                   .HasColumnName("StartDate")
                   ;


            builder.Property(c => c.FinalDate)
                   .HasColumnName("FinalDate")
                   ;

            builder.ToTable("Task");
        }
    }
}

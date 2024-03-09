using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Data.Repository
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {

        protected readonly Contexto contexto;

        protected readonly DbSet<TEntity> DbSet;
        protected BaseRepository(Contexto _contexto)
        {
            contexto = _contexto;
            DbSet = contexto.Set<TEntity>();
        }

        public async Task AddAsync(TEntity obj) => await DbSet.AddAsync(obj);

        public void Dispose() => GC.SuppressFinalize(this);

        public IQueryable<TEntity> GetAll() => DbSet;

        public async Task<IEnumerable<TEntity>> GetAll(Expression<Func<TEntity, bool>> expression)
         => await DbSet.Where(expression).ToListAsync();

        public async Task<TEntity> GetById(Guid id) => await DbSet.FindAsync(id);
        public void Remove(TEntity id) => DbSet.Remove(id);
        public async Task SaveChanges() => await contexto.SaveChangesAsync();

        public TEntity Update(TEntity obj) {
            DbSet.Update(obj);
            return obj;
        }  
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Data.Repository
{
    public interface IRepository<TEntity> : IDisposable where TEntity : class
    {
        Task  AddAsync(TEntity obj);
        Task<TEntity> GetById(Guid id);
        IQueryable<TEntity> GetAll();
        Task<IEnumerable<TEntity>> GetAll(Expression<Func<TEntity, bool>> expression);
        TEntity Update(TEntity obj);
        void Remove(TEntity id);
        Task SaveChanges();

    }
}

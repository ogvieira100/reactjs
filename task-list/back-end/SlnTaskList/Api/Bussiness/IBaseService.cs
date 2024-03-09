using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Bussiness
{
   public interface IBaseService<TEntity> : IDisposable where TEntity : class
    {


        Task<TEntity> Insert(TEntity obj);
        Task<TEntity> GetById(Guid id);
        IQueryable<TEntity> GetAll();
        Task<IEnumerable<TEntity>> GetAll(Expression<Func<TEntity, bool>> expression);
        Task<TEntity> Update(TEntity obj);
        Task Remove(TEntity id);
        

    }
}

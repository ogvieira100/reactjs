using Api.Commons;
using Api.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Bussiness
{
    public abstract class BaseService<TEntity> : IBaseService<TEntity> where TEntity : class
    {

        readonly LNotifications _notifications;

        readonly IRepository<TEntity> _repository;
        protected BaseService(LNotifications notifications, IRepository<TEntity> repository)
        {
            _repository = repository;
            _notifications = notifications;
        }

        public void Dispose() => GC.SuppressFinalize(this);

        public async Task<IEnumerable<TEntity>> GetAll(Expression<Func<TEntity, bool>> expression)
                      => await _repository.GetAll(expression);

        public IQueryable<TEntity> GetAll() => _repository.GetAll();
        public async Task<TEntity> GetById(Guid id)
        => await _repository.GetById(id);

        public async Task<TEntity> Insert(TEntity obj)
        {
            await _repository.AddAsync(obj);
            await _repository.SaveChanges();
            return obj;
        }

        public async Task Remove(TEntity id)
        {
            _repository.Remove(id);
            await _repository.SaveChanges();
        }

        public async Task<TEntity> Update(TEntity obj)
        {
            _repository.Update(obj);
            await _repository.SaveChanges();
            return obj;
        }
    }
}

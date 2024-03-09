using Api.Commons;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiController]
    public abstract class BaseController : ControllerBase
    {

        protected readonly LNotifications _notifications;

        public BaseController(LNotifications notifications)
        {
            _notifications = notifications;
        }


        protected async Task<IActionResult> ExecApplication<T>(Func<Task<T>> func)
        {
            try
            {
                return Response(await func.Invoke());
            }
            catch (Exception ex)
            {
                AddError(ex);
            }
            return null;
        }



        protected void AddError(Exception ex)
        {
            _notifications.Add(new Notification { Message = ex.Message });
        }

        public bool IsValid()
        {
            return !_notifications.Any();
        }

        protected void ClearErrors()
        {
            _notifications.Clear();
        }

        protected new IActionResult Response(object result = null)
        {
            if (IsValid())
            {
                return Ok(new
                {
                    success = true,
                    data = result
                });
            }

            return BadRequest(new
            {
                success = false,
                data = result,
                errors = _notifications
            });
        }


        protected void NotifyModelStateErrors()
        {
            var erros = ModelState.Values.SelectMany(v => v.Errors);
            foreach (var erro in erros)
            {
                var erroMsg = erro.Exception == null ? erro.ErrorMessage : erro.Exception.Message;
                AddError(new Notification { Message = erroMsg });

            }
        }
        protected void AddError(Notification erro)
        {
            _notifications.Add(erro);
        }
    }
}

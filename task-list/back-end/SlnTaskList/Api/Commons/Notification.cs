﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Commons
{
    public enum EventNotification
    {
        Insert = 1,
        Update = 2,
        Delete = 3

    }

    public enum Priority
    {
        High = 1,
        Average = 2,
        Low = 3
    }

    public enum Layer
    {
        App = 1,
        Domain = 2,
        Repository = 3,
        Others = 4
    }
    public enum TypeNotificationNoty
    {
        Alert = 1,
        Error = 2,
        Sucess = 3,
        Information = 4
    }

    public enum NotyIntention
    {

    }


    public class Notification
    {
        public Priority Priority { get; set; }

        public Layer? Layer { get; set; }

        public TypeNotificationNoty TypeNotificationNoty { get; set; }

        public string Message { get; set; }

        public NotyIntention? NotyIntention { get; set; }

        public List<string> PropertsErrors { get; set; }

        public Notification()
        {
            Priority = Priority.Average;
            TypeNotificationNoty = TypeNotificationNoty.Error;
            PropertsErrors = new List<string>();
        }
    }

    public class LNotifications : List<Notification>
    {

        new void Add(Notification not)
        {
            ///colocar regras aqui

            base.Add(not);
        }

        new void AddRange(IEnumerable<Notification> nots)
        {
            foreach (var item in nots)
            {
                Add(item);
            }

        }

        public bool HaveErros { get { return this.Any(x => x.TypeNotificationNoty == TypeNotificationNoty.Error); } }

        public bool HaveAlerts { get { return this.Any(x => x.TypeNotificationNoty == TypeNotificationNoty.Alert); } }

        public bool HaveSucess { get { return this.Any(x => x.TypeNotificationNoty == TypeNotificationNoty.Sucess); } }

        public bool HaveInformations { get { return this.Any(x => x.TypeNotificationNoty == TypeNotificationNoty.Information); } }

        public bool HaveNotifications { get { return this.Any(); } }

    }
}

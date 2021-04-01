using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServerAspNetIdentity.Models
{
    public class MongoDBSettings : IMongoDBSettings
    {
        public string _ConnectionString = "";
        public string _DBName = "";
        public string _CollectionName = "";
        public string ConnectionString { set { _ConnectionString = value; } get { return _ConnectionString; } }
        public string DBName { set { _DBName = value; } get { return _DBName; } }
        public string CollectionName { set { _CollectionName = value; } get { return _CollectionName; } }
        //public string ConnectionString { get; set; }
        //public string DBName { get; set; }
        //public string CollectionName { get; set; }

    }

    public interface IMongoDBSettings
    {
        string ConnectionString { get; set; }
        string DBName { get; set; }
        string CollectionName { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Upload.Models
{
    public class City
    {
        public int CityId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public byte[] Image { get; set; }
    }
}
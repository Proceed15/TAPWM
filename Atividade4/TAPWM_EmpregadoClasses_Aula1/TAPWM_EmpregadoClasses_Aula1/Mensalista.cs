﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TAPWM_EmpregadoClasses_Aula1
{
    internal class Mensalista : Empregado
    {
        public double SalarioMensal { get; set; }
        public override double SalarioBruto()
        {
            return SalarioMensal;
        }
    }
}

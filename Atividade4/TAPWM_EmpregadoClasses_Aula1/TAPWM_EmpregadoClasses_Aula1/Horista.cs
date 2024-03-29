﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TAPWM_EmpregadoClasses_Aula1
{
    internal class Horista : Empregado
    {
        public double SalarioHora { get; set; }
        public double NumeroHora { get; set; }
        public int DiasFalta { get; set; }
        public override int Tempotrabalho()
        {
            //O método retorna um tipo span.
            TimeSpan span = DateTime.Today.Subtract(DataEntradaEmpresa);
            return (Convert.ToInt32(span.Days) - DiasFalta);
        }
        public override double SalarioBruto()
        {
            return SalarioHora*NumeroHora;
        }
    }
}

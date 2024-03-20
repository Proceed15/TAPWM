using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TAPWM_EmpregadoClasses_Aula1
{
    public partial class FrmHorista : Form
    {
        public FrmHorista()
        {
            InitializeComponent();
        }

        private void btnInstanciar_Click(object sender, EventArgs e)
        {
            Horista objHorista = new Horista();

            objHorista.NomeEmpregado = txtNome.Text;
            objHorista.Matricula = Convert.ToInt32(txtMatricula.Text);
            objHorista.SalarioHora = Convert.ToDouble(txtSalario.Text);
            objHorista.NumeroHora = Convert.ToDouble(txtHora.Text);
            objHorista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);
            objHorista.DiasFalta = Convert.ToInt32(txtFalta.Text);

            MessageBox.Show("Nome=" + objHorista.NomeEmpregado + "\n" +
                "Matrícula=" + objHorista.Matricula + "\n" +
                "Tempo Trabalho:" + objHorista.Tempotrabalho().ToString() +
                "\n" + "Salário Final=" +
                objHorista.SalarioBruto().ToString("N2"));
        }
    }
}

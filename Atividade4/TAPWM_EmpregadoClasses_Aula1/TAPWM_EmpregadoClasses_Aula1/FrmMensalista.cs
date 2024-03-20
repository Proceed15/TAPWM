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
    public partial class FrmMensalista : Form
    {
        public FrmMensalista()
        {
            InitializeComponent();
        }

        private void btnInstanciar1_Click(object sender, EventArgs e)
        {
          
        }

        private void btnInstancia_Click(object sender, EventArgs e)
        {
            Mensalista objMensalista = new Mensalista();

            objMensalista.NomeEmpregado = txtNome.Text;
            objMensalista.Matricula = Convert.ToInt32(txtMatricula.Text);
            objMensalista.DataEntradaEmpresa = Convert.ToDateTime(txtData.Text);
            objMensalista.SalarioMensal = Convert.ToDouble(txtSalario.Text);


            MessageBox.Show("Nome=" + objMensalista.NomeEmpregado + "\n" +
                "Matrícula=" + objMensalista.Matricula + "\n" +
                "Tempo Trabalho:" + objMensalista.Tempotrabalho().ToString() +
                "\n" + "Salário Final=" +
                objMensalista.SalarioBruto().ToString("N2"));
        }
    }
}

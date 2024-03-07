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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnMensalista_Click(object sender, EventArgs e)
        {
            FrmMensalista FrmMensalista = new FrmMensalista();
            FrmMensalista.Show();
        }

        private void btnHorista_Click(object sender, EventArgs e)
        {
            FrmHorista FrmHorista = new FrmHorista();
            FrmHorista.Show();
        }
    }
}

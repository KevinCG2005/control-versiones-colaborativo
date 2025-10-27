# control-versiones-colaborativo
Practica Colaborativa en Github
# Crear carpeta del proyecto
mkdir proyecto-git-colaborativo
cd proyecto-git-colaborativo

# Inicializar Git
git init

# Crear README inicial
echo "# Control de Versiones - Proyecto To-Do List" > README.md
git add README.md
git commit -m "Initial commit: agregar README"

# Conectar con GitHub/GitLab
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main

#!/bin/bash/
# Arquitetura 32 Bits
echo "Instalando compatibilidade com arquitetura 32 bits"
dpkg --add-architecture i386
aptitude update
aptitude install libc6:i386 libqt4-dbus:i386 libqt4-network:i386 libqt4-xml:i386 libqtcore4:i386 libqtgui4:i386 libqtwebkit4:i386 libstdc++6:i386 libx11-6:i386 libxext6:i386 libxss1:i386 libxv1:i386 libssl1.0.0:i386 libpulse0:i386 libasound2-plugins:i386 -y
#Skype#
echo "Baixando e instalando Skype"
wget -O skype-install.deb http://www.skype.com/go/getskype-linux-deb && dpkg -i skype-install.deb
#Perfumarias
echo "Instalando softwares adicionais"
apt-get install ipcalc vim nmap tcpdump  

#Firefox
echo "Baixando e instalando Firefox"
wget https://download.mozilla.org/?product=firefox-40.0.3-SSL&os=linux64&lang=pt-BR
tar xvjf firefox-40.0.3.tar.bz2
mv firefox/ /opt/ 
rm /usr/bin/firefox
ln -s /opt/firefox/firefox /usr/bin/firefox 

################# GLPI - Linux(Debian)  #################
## Script funcional no Debian 8
# 
#Apache2#
echo "Instalando Apache2"
apt-get install apache2 -y
#PHP5#
echo "Instalando PHP5"
apt-get install php5 php5-mysql -y
#Mysql# 
echo "Instalando Mysql"
apt-get install mysql-server mysql-common mysql-client -y
#GLPI#
echo "Download e instalação do GLPI"
wget https://forge.indepnet.net/attachments/download/2020/glpi-0.85.4.tar.gz && tar xzfv glpi-0.85.4.tar.gz /var/www/html

/etc/init.d/apache2 restart
#PHPNyadmin#
echo "Instalação PhpMyadmin"
apt-get install phpmyadmin -y

echo "<?php phpinfo(); ?>" >> /var/www/html/infophp

echo "Setando permissões ao GLPI"
chmod -R 777 /var/www/html/glpi/files/
chmod -R 777 /var/www/html/glpi/config/


echo "Abrindo configuração via browser" 
firefox http://localhost/glpi/ &
#
# Após a instalação concluída, os usuários e senhas padrões serão:
#
#    glpi/glpi para a conta do usuário administrador
#    tech/tech para a conta do usuário técnico
#    normal/normal para a conta do usuário normal
#    post-only/postonly para a conta do usuário postonly
#
# Você pode excluir ou modificar estes usuários bem como os dados iniciais.
#
# Fonte: 
# http://www.glpi-project.org/spip.php?article41&lang=en
# http://www.glpi-project.org/DOC/EN/
# https://www.youtube.com/watch?v=Z73eMK9jv5E
####################################################################
#Thunderbird#
echo "Baixando e instalando Thunderbird"
mkdir -p /home/$USER/Downloads/thunderbird
cd /home/$USER/Downloads/thunderbird
wget -r -l1 -A *.bz2 http://ftp.mozilla.org/pub/mozilla.org/thunderbird/releases/latest/linux-x86_64/pt-BR/
find ftp.mozilla.org/ -type f -name '*.bz2' -exec tar -jxvf {} -C /opt/ \;
 
echo "Criando ícone para o Thunderbird"
touch /usr/share/applications/Thunderbird.desktop
/usr/share/applications/Thunderbird.desktop << EOF
[Desktop Entry]
Encoding=UTF-8
Name=Thunderbird
Comment=Correio
GenericName=Correio
X-GNOME-FullName=Thunderbird Web Browser
Exec=/opt/thunderbird/thunderbird %u
Terminal=false
X-MultipleArgs=false
Type=Application
Icon=/opt/thunderbird/chrome/icons/default/default48.png
Categories=Network;WebBrowser;
MimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/vnd.mozilla.xul+xml;application/rss+xml;application/rdf+xml;image/gif;image/jpeg;image/png;x-scheme-handler/http;x-scheme-handler/https;
StartupWMClass=Firefox
StartupNotify=true
EOF
chmod +x /usr/share/applications/Thunderbird.desktop

 

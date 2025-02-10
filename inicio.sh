#!/bin/bash
clear 
echo "Criando pasta de montagem teste"
if [ -d /media/teste ]; then echo "Diretorio /media/teste ja existe." ;else mkdir /media/teste; fi
if [ -d /lib/live/mount/medium ]; then nautilus /lib/live/mount/medium & 2> /dev/null; fi
#teclado abnt2
echo "Configurando teclado abnt2"
setxkbmap -model pc105 -layout br -variant abnt2
# xev 
#showkey
echo "Ignorando tecla F11"
#cd ~ && echo 'keycode 118=' >> .Xmodmap && xmodmap -e 'keycode 118=' && echo 'keycode 95=' >> .Xmodmap && xmodmap -e 'keycode 95='
#cd -  1> /dev/null
echo -e "keycode 118=\nkeycode 95=" >  $HOME/.Xmodmap
xmodmap -e 'keycode 118=' 
xmodmap -e 'keycode 95=' 
xmodmap $HOME/.Xmodmap

echo "CONCLUIDO!"

